using CRUDApi_DotNet8.Data;
using CRUDApi_DotNet8.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CRUDApi_DotNet8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<List<Applicant>>> GetAllApplicants()
        {
            var applicants = await _context.Applicants.ToListAsync();
            return Ok(applicants);
        }

        [HttpPost]
        public async Task<ActionResult<List<Applicant>>> AddApplicant(Applicant applicant)
        {
            applicant.ID = 0;
            _context.Applicants.Add(applicant);
            await _context.SaveChangesAsync();
            return Ok(await _context.Applicants.ToListAsync());
        }   

        [HttpPost("auth")]
        public async Task<IActionResult> Login([FromBody] CRUDApi_DotNet8.Models.LoginRequest request)
        {
            try
            {
                if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
                {
                    return BadRequest(new { message = "Username and password are required." });
                }

                var applicant = await _context.Applicants
                    .FirstOrDefaultAsync(a => a.Username == request.Username && a.Password == request.Password);

                if (applicant == null)
                {
                    return Unauthorized(new { message = "Invalid credentials" });
                }

                var jwtKey = _configuration["Jwt:Key"];
                if (string.IsNullOrWhiteSpace(jwtKey))
                {
                    return StatusCode(500, new { message = "Jwt:Key is not configured." });
                }

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, applicant.Username),
                    new Claim(ClaimTypes.Role, "User")
                };

                var token = new JwtSecurityToken(
                    issuer: _configuration["Jwt:Issuer"],
                    audience: _configuration["Jwt:Audience"],
                    claims: claims,
                    expires: DateTime.UtcNow.AddHours(1),
                    signingCredentials: creds
                );

                return Ok(new
                {
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                    Roles = new[] { "User" }
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"Internal server error: {ex.Message}" });
            }
        }

        [HttpPut]
        public async Task<ActionResult<List<Applicant>>> UpdateApplicant(Applicant updatedApplicant)
        {
            var dbApplicant = await _context.Applicants.FindAsync(updatedApplicant.ID);
            if (dbApplicant is null)
                return NotFound("Applicant not found");

            dbApplicant.Username = updatedApplicant.Username;
            dbApplicant.Password = updatedApplicant.Password;
            dbApplicant.Email = updatedApplicant.Email;

            await _context.SaveChangesAsync();
            return Ok(await _context.Applicants.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Applicant>>> DeleteApplicant(int id)
        {
            var dbApplicant = await _context.Applicants.FindAsync(id);
            if (dbApplicant is null)
                return NotFound("Applicant not found");

            _context.Applicants.Remove(dbApplicant);
            await _context.SaveChangesAsync();
            return Ok(await _context.Applicants.ToListAsync());
        }
    }
}

