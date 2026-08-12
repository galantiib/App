using Microsoft.AspNetCore.SignalR;

namespace CRUDApi_DotNet8.Hubs
{
    public class NotificationHub : Hub
    {
        public async Task JoinUserGroup(string username)
        {
            if (!string.IsNullOrWhiteSpace(username))
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, username);
            }
        }
        public async Task SendNotification(string username, string message)
        {
            await Clients.Group(username).SendAsync("TaskAssigned", message);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            await base.OnDisconnectedAsync(exception);
        }

        public async Task NotifyTaskAssigned(string username, object task)
        {
            if (!string.IsNullOrWhiteSpace(username))
            {
                await Clients.Group(username).SendAsync("TaskAssigned", task);
            }
        }

    }
}

