using CRUDApi_DotNet8.Data;
using CRUDApi_DotNet8.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using TaskEntity = CRUDApi_DotNet8.Entities.Task; 

namespace CRUDApi_DotNet8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IHubContext<NotificationHub> _hubContext;

        public TaskController(DataContext context, IHubContext<NotificationHub> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        [HttpGet]
        public async System.Threading.Tasks.Task<ActionResult<List<TaskEntity>>> GetAllTasks()
        {
            return Ok(await _context.Tasks.ToListAsync());
        }

        [HttpGet("{id}")]
        public async System.Threading.Tasks.Task<ActionResult<TaskEntity>> GetTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            return task == null ? NotFound("Task not found") : Ok(task);
        }

        [HttpPost]
        public async Task<ActionResult<TaskEntity>> AddTask(
            [FromBody] TaskEntity task,
            [FromServices] EmailService emailService)
        {
            if (task == null)
                return BadRequest("Task cannot be null.");

            task.ID = 0;
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            if (!string.IsNullOrWhiteSpace(task.AssignedTo))
            {
                await NotifyUserAsync(task, emailService, "TaskAssigned", "New Task Assigned");
            }

            return Ok(new
            {
                id = task.ID,
                title = task.Title,
                subject = task.Subject,
                priority = task.Priority,
                status = task.Status,
                assignedTo = task.AssignedTo,
            });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TaskEntity>> UpdateTask(
            int id,
            [FromBody] TaskEntity updatedTask,
            [FromServices] EmailService emailService)
        {
            if (updatedTask == null)
                return BadRequest("Task cannot be null.");

            var dbTask = await _context.Tasks.FindAsync(id);
            if (dbTask == null)
                return NotFound("Task not found.");

            dbTask.Title = updatedTask.Title;
            dbTask.Priority = updatedTask.Priority;
            dbTask.Status = updatedTask.Status;
            dbTask.Subject = updatedTask.Subject;
            dbTask.AssignedTo = updatedTask.AssignedTo;

            await _context.SaveChangesAsync();

            if (!string.IsNullOrWhiteSpace(dbTask.AssignedTo))
            {
                await NotifyUserAsync(dbTask, emailService, "TaskUpdated", "Task Assigned/Updated");
            }

            return Ok(new
            {
                id = dbTask.ID,
                title = dbTask.Title,
                subject = dbTask.Subject,
                priority = dbTask.Priority,
                status = dbTask.Status,
                assignedTo = dbTask.AssignedTo,
            });
        }

        [HttpDelete("{id:int}")]
        public async System.Threading.Tasks.Task<ActionResult<List<TaskEntity>>> DeleteTask(int id)
        {
            var dbTask = await _context.Tasks.FindAsync(id);
            if (dbTask == null)
                return NotFound("Task not found");

            _context.Tasks.Remove(dbTask);
            await _context.SaveChangesAsync();
            return Ok(await _context.Tasks.ToListAsync());
        }

        
        private async System.Threading.Tasks.Task NotifyUserAsync(
            TaskEntity task,
            EmailService emailService,
            string hubEvent,
            string emailSubject)
        {
            var assignedUser = await _context.Applicants.FirstOrDefaultAsync(u => u.Username == task.AssignedTo);
            if (assignedUser != null && !string.IsNullOrWhiteSpace(assignedUser.Email))
            {
                await emailService.SendEmailAsync(
                    assignedUser.Email,
                    emailSubject,
                    $"<p>Hello {assignedUser.Username},</p><p>You have been assigned a task: <strong>{task.Title}</strong>.</p>"
                );
            }

            await _hubContext.Clients.Group(task.AssignedTo).SendAsync(hubEvent, new
            {
                id = task.ID,
                title = task.Title,
                subject = task.Subject,
                priority = task.Priority,
                status = task.Status,
                assignedTo = task.AssignedTo,
            });
        }
    }
}
