using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using UrbanNest.Models;
using Microsoft.AspNetCore.Identity;
using Type = UrbanNest.Models.Type;

namespace UrbanNest.Data;
public class UrbanNestDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;

    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<Property> Properties { get; set; }
    public DbSet<Type> Types { get; set; }
    public DbSet<Investor> Investors { get; set; }
    public DbSet<Agent> Agents { get; set; }
    public DbSet<Cashflow> Cashflows { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<PropertyInvestor> PropertyInvestors { get; set; }

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

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser[]
        {
    new IdentityUser
    {
        Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
        UserName = "adam.w",
        Email = "adam.welshman@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "a5be3ea4-57cd-471e-9b1f-d1ac68843c71",
        UserName = "stacy.l",
        Email = "stacy.lontoc@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "a1a7f10d-4c4b-4a29-ba49-6ef932eafc9a",
        UserName = "john.d",
        Email = "john.doe@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "e1d0e366-1b4b-4c9c-8d99-3eefa7a6a430",
        UserName = "jane.s",
        Email = "jane.smith@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "9a67ebd4-8f67-4f5b-9b0b-91c53fca6a6e",
        UserName = "robert.j",
        Email = "robert.johnson@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "d6ec1cb6-8a5d-4f8a-9b3d-ee69d5b39fa2",
        UserName = "susan.m",
        Email = "susan.miller@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "f3c4a859-5076-4624-95a9-d65c13a93cc6",
        UserName = "david.c",
        Email = "david.clark@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "7b499b14-0b71-4c2d-95fc-72585a4ce7d7",
        UserName = "linda.j",
        Email = "linda.jackson@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "62cbf9d0-8bb4-4f5f-ae8b-8f66c2083b8c",
        UserName = "william.t",
        Email = "william.thomas@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "7454e186-7dca-4db2-90bf-192e24d9aa88",
        UserName = "mary.r",
        Email = "mary.roberts@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "3eb94ed3-c4f2-43c3-aa8d-d0f18e3cbfe2",
        UserName = "james.h",
        Email = "james.harris@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "f7f37e47-e2bb-4cbb-9a5e-3bb218ac3ff5",
        UserName = "jennifer.l",
        Email = "jennifer.lewis@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "9bea5400-fbe7-4fb9-b8ca-49c51b68c7a9",
        UserName = "michael.m",
        Email = "michael.morris@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "398d39f2-5ce9-4c5e-bb8e-19a0a18b493f",
        UserName = "laura.p",
        Email = "laura.peterson@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "256d7f3d-eb2d-48ec-ae0c-5f909a1259c1",
        UserName = "daniel.b",
        Email = "daniel.brown@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "bde34669-9337-4e86-8a77-82e416531f63",
        UserName = "sandra.w",
        Email = "sandra.wilson@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "00b85f45-9c96-41c3-8dce-3acaf43964df",
        UserName = "kevin.k",
        Email = "kevin.king@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "e5d832b4-1e5d-4e61-9717-8c9509ed9d54",
        UserName = "linda.g",
        Email = "linda.garcia@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "3a5ebe8a-9a4a-46cc-8270-e789d8c115f9",
        UserName = "joseph.h",
        Email = "joseph.hernandez@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
    new IdentityUser
    {
        Id = "694b216b-f0c3-49d4-8f14-1d786750ea6c",
        UserName = "lisa.m",
        Email = "lisa.martinez@gmail.com",
        PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
    },
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