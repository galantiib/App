using CRUDApi_DotNet8.Entities;
using Microsoft.EntityFrameworkCore;
using Task = CRUDApi_DotNet8.Entities.Task;

namespace CRUDApi_DotNet8.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Applicant> Applicants { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
