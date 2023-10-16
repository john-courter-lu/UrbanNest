using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using UrbanNest.Models;
using Microsoft.AspNetCore.Identity;

namespace UrbanNest.Data;
public class UrbanNestDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;

    public DbSet<UserProfile> UserProfiles { get; set; }

    public UrbanNestDbContext(DbContextOptions<UrbanNestDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "adam.welshman@gmail.com",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });

        modelBuilder.Entity<UserProfile>().HasData(new UserProfile
        {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Adam",
            LastName = "Welshman",
            Address = "101 Main Street",
        });

        // Add data seeding here
    }
}