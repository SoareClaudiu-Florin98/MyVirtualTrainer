using Microsoft.EntityFrameworkCore;
using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Database
{
    public class MyVirtualTrainerDbContext : DbContext
    {
        public MyVirtualTrainerDbContext(DbContextOptions<MyVirtualTrainerDbContext> options)
        : base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<Food> Food { get; set; }
        public DbSet<Post> Post { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

        }

    }
}
