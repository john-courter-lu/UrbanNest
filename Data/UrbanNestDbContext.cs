using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using UrbanNest.Models;
using Microsoft.AspNetCore.Identity;
using Type = UrbanNest.Models.Type; // to avoid confict with System.Type

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

        // data seeding: IdentityUser
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

        // data seeding: UserProfile
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile[]
        {
    new UserProfile
    {
        Id = 1,
        IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
        FirstName = "Adam",
        LastName = "Welshman",
        Address = "101 Main Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37201",
        PhoneNumber = "555-123-4567",
        AvatarURL = "https://example.com/avatar/adam.png",
        JoinedDate = new DateTime(2022, 10, 18),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 2,
        IdentityUserId = "a5be3ea4-57cd-471e-9b1f-d1ac68843c71",
        FirstName = "Stacy",
        LastName = "Lontoc",
        Address = "202 Elm Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37202",
        PhoneNumber = "555-234-5678",
        AvatarURL = "https://example.com/avatar/stacy.png",
        JoinedDate = new DateTime(2022, 9, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 3,
        IdentityUserId = "a1a7f10d-4c4b-4a29-ba49-6ef932eafc9a",
        FirstName = "John",
        LastName = "Doe",
        Address = "303 Oak Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37203",
        PhoneNumber = "555-345-6789",
        AvatarURL = "https://example.com/avatar/john.png",
        JoinedDate = new DateTime(2022, 8, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 4,
        IdentityUserId = "e1d0e366-1b4b-4c9c-8d99-3eefa7a6a430",
        FirstName = "Jane",
        LastName = "Smith",
        Address = "404 Pine Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37204",
        PhoneNumber = "555-456-7890",
        AvatarURL = "https://example.com/avatar/jane.png",
        JoinedDate = new DateTime(2022, 7, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 5,
        IdentityUserId = "9a67ebd4-8f67-4f5b-9b0b-91c53fca6a6e",
        FirstName = "Robert",
        LastName = "Johnson",
        Address = "505 Cedar Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37205",
        PhoneNumber = "555-567-8901",
        AvatarURL = "https://example.com/avatar/robert.png",
        JoinedDate = new DateTime(2022, 6, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 6,
        IdentityUserId = "d6ec1cb6-8a5d-4f8a-9b3d-ee69d5b39fa2",
        FirstName = "Susan",
        LastName = "Miller",
        Address = "606 Walnut Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37206",
        PhoneNumber = "555-678-9012",
        AvatarURL = "https://example.com/avatar/susan.png",
        JoinedDate = new DateTime(2022, 5, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 7,
        IdentityUserId = "f3c4a859-5076-4624-95a9-d65c13a93cc6",
        FirstName = "David",
        LastName = "Clark",
        Address = "707 Maple Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37207",
        PhoneNumber = "555-789-0123",
        AvatarURL = "https://example.com/avatar/david.png",
        JoinedDate = new DateTime(2022, 4, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 8,
        IdentityUserId = "7b499b14-0b71-4c2d-95fc-72585a4ce7d7",
        FirstName = "Linda",
        LastName = "Jackson",
        Address = "808 Oak Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37208",
        PhoneNumber = "555-890-1234",
        AvatarURL = "https://example.com/avatar/linda.png",
        JoinedDate = new DateTime(2022, 3, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 9,
        IdentityUserId = "62cbf9d0-8bb4-4f5f-ae8b-8f66c2083b8c",
        FirstName = "William",
        LastName = "Thomas",
        Address = "909 Pine Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37209",
        PhoneNumber = "555-012-3456",
        AvatarURL = "https://example.com/avatar/william.png",
        JoinedDate = new DateTime(2022, 2, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 10,
        IdentityUserId = "7454e186-7dca-4db2-90bf-192e24d9aa88",
        FirstName = "Mary",
        LastName = "Roberts",
        Address = "1010 Elm Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37210",
        PhoneNumber = "555-123-4567",
        AvatarURL = "https://example.com/avatar/mary.png",
        JoinedDate = new DateTime(2022, 1, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 11,
        IdentityUserId = "3eb94ed3-c4f2-43c3-aa8d-d0f18e3cbfe2",
        FirstName = "James",
        LastName = "Harris",
        Address = "111 Main Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37211",
        PhoneNumber = "555-234-5678",
        AvatarURL = "https://example.com/avatar/james.png",
        JoinedDate = new DateTime(2021, 12, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 12,
        IdentityUserId = "f7f37e47-e2bb-4cbb-9a5e-3bb218ac3ff5",
        FirstName = "Jennifer",
        LastName = "Lewis",
        Address = "121 Elm Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37212",
        PhoneNumber = "555-345-6789",
        AvatarURL = "https://example.com/avatar/jennifer.png",
        JoinedDate = new DateTime(2021, 11, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 13,
        IdentityUserId = "9bea5400-fbe7-4fb9-b8ca-49c51b68c7a9",
        FirstName = "Michael",
        LastName = "Morris",
        Address = "131 Oak Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37213",
        PhoneNumber = "555-456-7890",
        AvatarURL = "https://example.com/avatar/michael.png",
        JoinedDate = new DateTime(2021, 10, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 14,
        IdentityUserId = "398d39f2-5ce9-4c5e-bb8e-19a0a18b493f",
        FirstName = "Laura",
        LastName = "Peterson",
        Address = "141 Pine Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37214",
        PhoneNumber = "555-567-8901",
        AvatarURL = "https://example.com/avatar/laura.png",
        JoinedDate = new DateTime(2021, 9, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 15,
        IdentityUserId = "256d7f3d-eb2d-48ec-ae0c-5f909a1259c1",
        FirstName = "Daniel",
        LastName = "Brown",
        Address = "151 Elm Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37215",
        PhoneNumber = "555-678-9012",
        AvatarURL = "https://example.com/avatar/daniel.png",
        JoinedDate = new DateTime(2021, 8, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 16,
        IdentityUserId = "bde34669-9337-4e86-8a77-82e416531f63",
        FirstName = "Sandra",
        LastName = "Wilson",
        Address = "161 Oak Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37216",
        PhoneNumber = "555-789-0123",
        AvatarURL = "https://example.com/avatar/sandra.png",
        JoinedDate = new DateTime(2021, 7, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 17,
        IdentityUserId = "00b85f45-9c96-41c3-8dce-3acaf43964df",
        FirstName = "Kevin",
        LastName = "King",
        Address = "171 Pine Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37217",
        PhoneNumber = "555-890-1234",
        AvatarURL = "https://example.com/avatar/kevin.png",
        JoinedDate = new DateTime(2021, 6, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 18,
        IdentityUserId = "e5d832b4-1e5d-4e61-9717-8c9509ed9d54",
        FirstName = "Linda",
        LastName = "Garcia",
        Address = "181 Elm Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37218",
        PhoneNumber = "555-012-3456",
        AvatarURL = "https://example.com/avatar/linda.png",
        JoinedDate = new DateTime(2021, 5, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 19,
        IdentityUserId = "3a5ebe8a-9a4a-46cc-8270-e789d8c115f9",
        FirstName = "Joseph",
        LastName = "Hernandez",
        Address = "191 Oak Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37219",
        PhoneNumber = "555-123-4567",
        AvatarURL = "https://example.com/avatar/joseph.png",
        JoinedDate = new DateTime(2021, 4, 15),
        IsActive = true,
    },
    new UserProfile
    {
        Id = 20,
        IdentityUserId = "694b216b-f0c3-49d4-8f14-1d786750ea6c",
        FirstName = "Lisa",
        LastName = "Martinez",
        Address = "201 Pine Street",
        City = "Nashville",
        State = "Tennessee",
        ZipCode = "37220",
        PhoneNumber = "555-234-5678",
        AvatarURL = "https://example.com/avatar/lisa.png",
        JoinedDate = new DateTime(2021, 3, 15),
        IsActive = true,
    },
                });

        // data seeding: Agent
        modelBuilder.Entity<Agent>().HasData(new Agent[]
{
    new Agent
    {
        Id = 1,
        RealEstateLicenseNumber = 98765432,
        UserProfileId = 1, // Use the first UserProfile ID
    },
    new Agent
    {
        Id = 2,
        RealEstateLicenseNumber = 56781234,
        UserProfileId = 2, // Use the second UserProfile ID
    },
    new Agent
    {
        Id = 3,
        RealEstateLicenseNumber = 12345678,
        UserProfileId = 3, // Use the third UserProfile ID
    },
    new Agent
    {
        Id = 4,
        RealEstateLicenseNumber = 87654321,
        UserProfileId = 4, // Use the fourth UserProfile ID
    },
    new Agent
    {
        Id = 5,
        RealEstateLicenseNumber = 54321678,
        UserProfileId = 5, // Use the fifth UserProfile ID
    },
    new Agent
    {
        Id = 6,
        RealEstateLicenseNumber = 34567812,
        UserProfileId = 6, // Use the sixth UserProfile ID
    },
    new Agent
    {
        Id = 7,
        RealEstateLicenseNumber = 21678345,
        UserProfileId = 7, // Use the seventh UserProfile ID
    },
    new Agent
    {
        Id = 8,
        RealEstateLicenseNumber = 16783456,
        UserProfileId = 8, // Use the eighth UserProfile ID
    },
    new Agent
    {
        Id = 9,
        RealEstateLicenseNumber = 67834561,
        UserProfileId = 9, // Use the ninth UserProfile ID
    },
    new Agent
    {
        Id = 10,
        RealEstateLicenseNumber = 78345612,
        UserProfileId = 10, // Use the tenth UserProfile ID
    },
});

        // data seeding: Investor
        modelBuilder.Entity<Investor>().HasData(new Investor[]
    {
    new Investor
    {
        Id = 1,
        Company = "Dream Home Investments",
        UserProfileId = 11
    },
    new Investor
    {
        Id = 2,
        Company = "Prime Property Holdings",
        UserProfileId = 12
    },
    new Investor
    {
        Id = 3,
        Company = "Prosperity Estates",
        UserProfileId = 13
    },
    new Investor
    {
        Id = 4,
        Company = "Urban Capital Ventures",
        UserProfileId = 14
    },
    new Investor
    {
        Id = 5,
        Company = "Golden Gate Realty Group",
        UserProfileId = 15
    },
    new Investor
    {
        Id = 6,
        Company = "Horizon Properties, Inc.",
        UserProfileId = 16
    },
    new Investor
    {
        Id = 7,
        Company = "Evergreen Investments",
        UserProfileId = 17
    },
    new Investor
    {
        Id = 8,
        Company = "Oasis Real Estate Partners",
        UserProfileId = 18
    },
    new Investor
    {
        Id = 9,
        Company = "Silver Key Realty Trust",
        UserProfileId = 19
    },
    new Investor
    {
        Id = 10,
        Company = "Liberty Land Investments",
        UserProfileId = 20
    },
    });

        // data seeding: Type
        modelBuilder.Entity<Type>().HasData(new Type[]
        {
    new Type
    {
        Id = 1,
        Name = "Condo"
    },
    new Type
    {
        Id = 2,
        Name = "Single Family House"
    },
    new Type
    {
        Id = 3,
        Name = "Apartment"
    },
    new Type
    {
        Id = 4,
        Name = "Duplex"
    },
    new Type
    {
        Id = 5,
        Name = "Townhouse"
    },
    new Type
    {
        Id = 6,
        Name = "Multi-Family Home"
    }
        });

        //data seeding: Properties
        modelBuilder.Entity<Property>().HasData(new Property[]
        {
    new Property
    {
        Id = 1,
        AgentId = 1,
        Address = "123 Main St",
        City = "Nashville",
        State = "TN",
        ZipCode = "37201",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property1.jpg",
        SquareFeet = 1500,
        NumberOfBedroom = 2,
        NumberOfBathroom = 2,
        TypeId = 1
    },
    new Property
    {
        Id = 2,
        AgentId = 2,
        Address = "456 Elm St",
        City = "Hermitage",
        State = "TN",
        ZipCode = "37076",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property2.jpg",
        SquareFeet = 1800,
        NumberOfBedroom = 3,
        NumberOfBathroom = 2,
        TypeId = 2
    },
    // Property 3
    new Property
    {
        Id = 3,
        AgentId = 3,
        Address = "789 Oak St",
        City = "Mt Juliet",
        State = "TN",
        ZipCode = "37122",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property3.jpg",
        SquareFeet = 2000,
        NumberOfBedroom = 4,
        NumberOfBathroom = 3,
        TypeId = 3
    },
    // Property 4
    new Property
    {
        Id = 4,
        AgentId = 4,
        Address = "101 Pine St",
        City = "Green Hill",
        State = "TN",
        ZipCode = "37138",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property4.jpg",
        SquareFeet = 1600,
        NumberOfBedroom = 2,
        NumberOfBathroom = 1,
        TypeId = 4
    },
    // Property 5
    new Property
    {
        Id = 5,
        AgentId = 5,
        Address = "321 Oak Ln",
        City = "Franklin",
        State = "TN",
        ZipCode = "37064",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property5.jpg",
        SquareFeet = 2200,
        NumberOfBedroom = 3,
        NumberOfBathroom = 2,
        TypeId = 5
    },
    // Property 6
    new Property
    {
        Id = 6,
        AgentId = 6,
        Address = "456 Willow Dr",
        City = "Nashville",
        State = "TN",
        ZipCode = "37209",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property6.jpg",
        SquareFeet = 1400,
        NumberOfBedroom = 1,
        NumberOfBathroom = 1,
        TypeId = 6
    },
    // Property 7
    new Property
    {
        Id = 7,
        AgentId = 7,
        Address = "789 Elm St",
        City = "Hermitage",
        State = "TN",
        ZipCode = "37076",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property7.jpg",
        SquareFeet = 1800,
        NumberOfBedroom = 3,
        NumberOfBathroom = 2,
        TypeId = 1
    },
    // Property 8
    new Property
    {
        Id = 8,
        AgentId = 8,
        Address = "543 Birch Ave",
        City = "Nashville",
        State = "TN",
        ZipCode = "37201",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property8.jpg",
        SquareFeet = 2500,
        NumberOfBedroom = 4,
        NumberOfBathroom = 2,
        TypeId = 2
    },
    // Property 9
    new Property
    {
        Id = 9,
        AgentId = 9,
        Address = "101 Cedar St",
        City = "Mt Juliet",
        State = "TN",
        ZipCode = "37122",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property9.jpg",
        SquareFeet = 1800,
        NumberOfBedroom = 3,
        NumberOfBathroom = 2,
        TypeId = 3
    },
    // Property 10
    new Property
    {
        Id = 10,
        AgentId = 10,
        Address = "789 Oak St",
        City = "Franklin",
        State = "TN",
        ZipCode = "37064",
        IsActive = true,
        IsRentOut = true,
        ImageURL = "https://example.com/property10.jpg",
        SquareFeet = 2000,
        NumberOfBedroom = 4,
        NumberOfBathroom = 3,
        TypeId = 4
    }
        });

        // data seeding: PropertyInvestor
        modelBuilder.Entity<PropertyInvestor>().HasData(new PropertyInvestor[]
        {
    // PropertyInvestor 1
    new PropertyInvestor
    {
        Id = 1,
        PropertyId = 1,
        InvestorId = 1
    },
    // PropertyInvestor 2
    new PropertyInvestor
    {
        Id = 2,
        PropertyId = 2,
        InvestorId = 2
    },
    // PropertyInvestor 3
    new PropertyInvestor
    {
        Id = 3,
        PropertyId = 3,
        InvestorId = 3
    },
    // PropertyInvestor 4
    new PropertyInvestor
    {
        Id = 4,
        PropertyId = 4,
        InvestorId = 4
    },
    // PropertyInvestor 5
    new PropertyInvestor
    {
        Id = 5,
        PropertyId = 5,
        InvestorId = 5
    },
    // PropertyInvestor 6
    new PropertyInvestor
    {
        Id = 6,
        PropertyId = 6,
        InvestorId = 6
    },
    // PropertyInvestor 7
    new PropertyInvestor
    {
        Id = 7,
        PropertyId = 7,
        InvestorId = 7
    },
    // PropertyInvestor 8
    new PropertyInvestor
    {
        Id = 8,
        PropertyId = 8,
        InvestorId = 8
    },
    // PropertyInvestor 9
    new PropertyInvestor
    {
        Id = 9,
        PropertyId = 9,
        InvestorId = 9
    },
    // PropertyInvestor 10
    new PropertyInvestor
    {
        Id = 10,
        PropertyId = 10,
        InvestorId = 10
    },
    // Additional combinations (One Investor can have multiple Properties; One Property can be invested by multiple Investors)
    new PropertyInvestor
    {
        Id = 11,
        PropertyId = 1,
        InvestorId = 5
    },
    new PropertyInvestor
    {
        Id = 12,
        PropertyId = 2,
        InvestorId = 6
    },
    new PropertyInvestor
    {
        Id = 13,
        PropertyId = 3,
        InvestorId = 7
    },
    new PropertyInvestor
    {
        Id = 14,
        PropertyId = 4,
        InvestorId = 8
    },
    new PropertyInvestor
    {
        Id = 15,
        PropertyId = 5,
        InvestorId = 9
    },
    new PropertyInvestor
    {
        Id = 16,
        PropertyId = 6,
        InvestorId = 10
    }
        });


    }
}