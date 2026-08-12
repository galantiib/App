using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDApi_DotNet8.Entities;
using CRUDApi_DotNet8.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CRUDApi_DotNet8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        private readonly DataContext _context;

        public CRUDController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Player>>> GetAllPlayers()
        {
            var players = await _context.Players.ToListAsync();

            return Ok(players);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            var player = await _context.Players.Where(x => x.ID == id).FirstOrDefaultAsync();
            if (player is null)
                return NotFound("Player not found");

            return Ok(player);
        }

        [HttpPost]
        public async Task<ActionResult<List<Player>>> AddPlayer(Player player)
        {
            player.ID = 0; 

            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return Ok(await _context.Players.ToListAsync());
        }


        [HttpPut]

        public async Task<ActionResult<List<Player>>> UpdatePlayer(Player updatedPlayer)
        {
            var dbPlayer = await _context.Players.FindAsync(updatedPlayer.ID);
            if (dbPlayer is null)
                return NotFound("Player not found");

            dbPlayer.ID = updatedPlayer.ID;
            dbPlayer.FirstName = updatedPlayer.FirstName;
            dbPlayer.LastName = updatedPlayer.LastName;
            dbPlayer.Position = updatedPlayer.Position;

            await _context.SaveChangesAsync();

            return Ok(await _context.Players.ToListAsync());
        }
        [HttpDelete]

        public async Task<ActionResult<List<Player>>> DeletePlayer(int id)
        {
            var dbPlayer = await _context.Players.FindAsync(id);
            if (dbPlayer is null)
                return NotFound("Player not found");

            _context.Players.Remove(dbPlayer);
            await _context.SaveChangesAsync();

            return Ok(await _context.Players.ToListAsync());
        }
    }   
}
