using Microsoft.AspNetCore.Mvc;
using CRUDApi_DotNet8.Entities;
using CRUDApi_DotNet8.Data;
using Microsoft.EntityFrameworkCore;

namespace CRUDApi_DotNet8.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class OzzoController : ControllerBase
    {
        private readonly DataContext _context;

        public OzzoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            return Ok(await _context.Products.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product is null)
                return NotFound("Product not found");

            return Ok(product);
        }

        [HttpGet("by-name")]
        public async Task<ActionResult<List<Product>>> GetProductsByName([FromQuery] string keyword)
        {
            if (string.IsNullOrWhiteSpace(keyword))
                return BadRequest("Keyword is required");

            var products = await _context.Products
                .Where(p => p.Name.Contains(keyword))
                .ToListAsync();

            return Ok(products);
        }


        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.ID }, product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product updatedProduct)
        {
            var dbProduct = await _context.Products.FindAsync(id);
            if (dbProduct is null)
                return NotFound("Product not found");

            dbProduct.Name = updatedProduct.Name;
            dbProduct.Description = updatedProduct.Description;
            dbProduct.Components = updatedProduct.Components;
            dbProduct.Price = updatedProduct.Price;

            await _context.SaveChangesAsync();

            return Ok(dbProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var dbProduct = await _context.Products.FindAsync(id);
            if (dbProduct is null)
                return NotFound("Product not found");

            _context.Products.Remove(dbProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
