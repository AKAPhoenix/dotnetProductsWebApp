using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Mini_Library_Project.Models
{
    public class AppDBContext<UserCredentials> : IdentityDbContext
    {
        private readonly DbContextOptions _options;

        public AppDBContext(DbContextOptions options) : base(options)
        {
            _options = options;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<Author> Authors { get; set;  }

    }
}
