using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HouseRules.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    IsRevenueOrExpense = table.Column<bool>(type: "boolean", nullable: false),
                    IsOperational = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Types",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Types", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RoleId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Address = table.Column<string>(type: "text", nullable: true),
                    City = table.Column<string>(type: "text", nullable: true),
                    State = table.Column<string>(type: "text", nullable: true),
                    ZipCode = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    JoinedDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    AvatarURL = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true),
                    IdentityUserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfiles_AspNetUsers_IdentityUserId",
                        column: x => x.IdentityUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    AgentId = table.Column<int>(type: "integer", nullable: false),
                    Address = table.Column<string>(type: "text", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    State = table.Column<string>(type: "text", nullable: false),
                    ZipCode = table.Column<string>(type: "text", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    IsRentOut = table.Column<bool>(type: "boolean", nullable: false),
                    ImageURL = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true),
                    SquareFeet = table.Column<int>(type: "integer", nullable: false),
                    NumberOfBedroom = table.Column<int>(type: "integer", nullable: false),
                    NumberOfBathroom = table.Column<int>(type: "integer", nullable: false),
                    TypeId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Properties_Types_TypeId",
                        column: x => x.TypeId,
                        principalTable: "Types",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Agents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RealEstateLicenseNumber = table.Column<int>(type: "integer", nullable: false),
                    UserProfileId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Agents_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Investors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Company = table.Column<string>(type: "text", nullable: true),
                    UserProfileId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Investors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Investors_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Cashflows",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Amount = table.Column<decimal>(type: "numeric", nullable: false),
                    CategoryId = table.Column<int>(type: "integer", nullable: false),
                    PropertyId = table.Column<int>(type: "integer", nullable: false),
                    IsPositiveOrNegative = table.Column<bool>(type: "boolean", nullable: false),
                    Date = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cashflows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cashflows_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cashflows_Properties_PropertyId",
                        column: x => x.PropertyId,
                        principalTable: "Properties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PropertyInvestors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PropertyId = table.Column<int>(type: "integer", nullable: false),
                    InvestorId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropertyInvestors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PropertyInvestors_Investors_InvestorId",
                        column: x => x.InvestorId,
                        principalTable: "Investors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PropertyInvestors_Properties_PropertyId",
                        column: x => x.PropertyId,
                        principalTable: "Properties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "e4ca18c2-1d00-4e1e-9bc4-1d2772b54aea", "Admin", "admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "00b85f45-9c96-41c3-8dce-3acaf43964df", 0, "95c11252-9320-4498-b576-f6b4130131de", "kevin.king@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEIGg03TAyXo0R7gXpsMBXiUQYdvu1DLKExOm1suRRfENQR+EKVCPa441/5cE4XWqDA==", null, false, "d443c03d-6915-4a10-8a3f-bf9c14e56d29", false, "kevin.k" },
                    { "256d7f3d-eb2d-48ec-ae0c-5f909a1259c1", 0, "2798fc04-75e6-4f0c-9ba5-bf233eec4260", "daniel.brown@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEGDgPZKTzW28L2ZgP/8gQk8zlinOITNIY8USi21Os858ZuSptVkM9lCRub/pdXr6ew==", null, false, "167310a5-c9e7-4340-bf0c-73c3d9bf754d", false, "daniel.b" },
                    { "398d39f2-5ce9-4c5e-bb8e-19a0a18b493f", 0, "6f588a58-771a-4429-a683-b09063198d67", "laura.peterson@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEP2u1vE0gKQrJfkc3Zm/WSUB5Pd6mch+N6Bp97kUA6edAAN5/Vv0u5CiTWq0qz6f1w==", null, false, "4d342b55-7129-45d9-8d07-dbfe937eb43a", false, "laura.p" },
                    { "3a5ebe8a-9a4a-46cc-8270-e789d8c115f9", 0, "eb7adbc5-48c2-4f72-89fb-4811960c2175", "joseph.hernandez@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAECh4P6fspzhqZT7cUfNBa9grLS8tC6n3sIwRa0NxTdprRqNWUE6Tt9rnrSvnufiwoQ==", null, false, "ae65da0b-6abe-44de-8525-56ec2f0708ba", false, "joseph.h" },
                    { "3eb94ed3-c4f2-43c3-aa8d-d0f18e3cbfe2", 0, "c3b89a93-5893-48fd-8120-578d54fafc46", "james.harris@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEO7gGKn1zjp6FJnz5IkXb5K3TbkAbjN5EsXlqJMvRbUEuTOnmpXkDKHm0hqZetP6aA==", null, false, "3f0a1d47-cc20-40c4-9b3e-c40317448a38", false, "james.h" },
                    { "62cbf9d0-8bb4-4f5f-ae8b-8f66c2083b8c", 0, "de5e5e1a-85ad-4fbf-9783-58f8c82e5a72", "william.thomas@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEFjl4y0Dd1XMFA1NGj/FLG+3aejX889Yhpfn6LVN3swXxykCBlyxlisPTeEyEbAomA==", null, false, "4a782adf-1c76-42f9-9a03-d996a8875e50", false, "william.t" },
                    { "694b216b-f0c3-49d4-8f14-1d786750ea6c", 0, "27742870-e36e-43e9-a243-209d14033288", "lisa.martinez@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEC0ohHKVQ472AGUndBHrGZUq06UH/tEpvuTpZsBBpWRUFLrrDz1n//VT+RfNyb+evQ==", null, false, "50432d4b-bc3e-4c2b-b596-5a7a1e9e672a", false, "lisa.m" },
                    { "7454e186-7dca-4db2-90bf-192e24d9aa88", 0, "7ca2fc54-2f17-4817-9de4-b58109e8ed4b", "mary.roberts@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEIUmbV+GEoKPvBs04l3/3QQKl7APg6BmIj3m+pw7m+gBaVhFseQpMVDeV6xQQDcOXA==", null, false, "ff210171-06b1-44e7-a3da-f2f53b5f5529", false, "mary.r" },
                    { "7b499b14-0b71-4c2d-95fc-72585a4ce7d7", 0, "b611b178-cf62-4bab-9bd9-792612e3118d", "linda.jackson@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEF3yahiAs7U0vDaxSmqdyzw7IYO+4VEui5W6VD2BQwUjwonbUCTcDkcuQpuIA6KEaA==", null, false, "8b8fa589-e67e-4b50-9d64-012823f23a06", false, "linda.j" },
                    { "9a67ebd4-8f67-4f5b-9b0b-91c53fca6a6e", 0, "dd7b7f1f-f8b8-4fac-afe1-640e2fb7a113", "robert.johnson@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEGTP8mYF41ATDqmtVMvqqcIZMGuEm77nHF9KHCczMNY9DpMTea4iohzOC+uEZbb96w==", null, false, "5ff3e758-1498-4ae2-86d5-6fc77842ebdc", false, "robert.j" },
                    { "9bea5400-fbe7-4fb9-b8ca-49c51b68c7a9", 0, "204d60c8-4f32-4a76-b056-20b4f78f7de4", "michael.morris@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEBKtZiRMs7Al30ubTm9cTCxq8e4eTqrEfNNnhxeUTBWu7XVm9QlNViQdAGjp9DP4ew==", null, false, "e0e7ce66-df6a-46f6-ac72-52408fcf03cd", false, "michael.m" },
                    { "a1a7f10d-4c4b-4a29-ba49-6ef932eafc9a", 0, "091da26c-8271-45f5-b15a-6702458b145f", "john.doe@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEHIhmuU62kqjYzlQrgo8sKKUuGv+g85SJW41pcLaQSbn6TFMah8kqVr4IxvGhsr9uA==", null, false, "fe8363b0-c7cd-4e87-9bf4-72dc9d6c5697", false, "john.d" },
                    { "a5be3ea4-57cd-471e-9b1f-d1ac68843c71", 0, "11dd4ef2-b4d3-48f5-a6c1-4fb357e8d435", "stacy.lontoc@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEDr0nQvkqIWTBxkwyo/pouxzA5/ICN4dql8eoCvmp2zxT6smsjg9gszBv/AR6Ig31Q==", null, false, "a6590fbc-3af9-454a-924e-ad8553dfca0e", false, "stacy.l" },
                    { "bde34669-9337-4e86-8a77-82e416531f63", 0, "69a88471-96c8-4e56-8e27-d0af5a9422d6", "sandra.wilson@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEPsg3lMpj089Z16UwXPVe5E/VR16GGJvaMTe0aA1ZSX7qjJW00Fb5ysBTrcFCYH7CQ==", null, false, "b34fef5e-224b-4671-b1e2-8b4300bb7416", false, "sandra.w" },
                    { "d6ec1cb6-8a5d-4f8a-9b3d-ee69d5b39fa2", 0, "6012feda-7ebe-4a9b-b226-3ba756f77f2d", "susan.miller@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEAVZtn40kuveLLQmhJPMFtbsL8lQ2a7Y9unlh9stkM9kx3N4on4JxeYtKm1ncDGnJQ==", null, false, "ba948e8d-60ba-4cc1-8159-7bcffa32e1b7", false, "susan.m" },
                    { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "a1a8dab5-b938-4ff4-a297-535b48032848", "adam.welshman@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAENcQGHdVPzSD2LzOV3/r7ExrXq81kMRMUFidSpITyCviyOm4x6KJlF7aMonaJ26loQ==", null, false, "6e7dc5b7-195a-49aa-808f-d7d96f800e5c", false, "adam.w" },
                    { "e1d0e366-1b4b-4c9c-8d99-3eefa7a6a430", 0, "bb616524-8f11-4f1b-be14-68d2823b25c2", "jane.smith@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAECOPUwU/gf+FhlZsOkhiQTo1klF5ydIQWSvIfEm+gWiN360kFN7x9Qg9ZBmzfggVVw==", null, false, "68757038-b97b-484e-bbc3-016565df9f3e", false, "jane.s" },
                    { "e5d832b4-1e5d-4e61-9717-8c9509ed9d54", 0, "8e652d34-ff13-44bc-8a2f-011016b902e0", "linda.garcia@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEJaUqbtd+vfC4c3z+uXlKfPy/2rTD2bHk4KxfSeJpOSF8jYbYOKvYC4O7eK3l0cZOA==", null, false, "7a8a9526-b0f5-4772-9fd8-77071fa46d22", false, "linda.g" },
                    { "f3c4a859-5076-4624-95a9-d65c13a93cc6", 0, "f719d41f-46cb-40db-83ef-82c0feb3bbb6", "david.clark@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEEHiJXV2/4KUfwwIBX0Y1LyV2AADEUnvH+RGjV/0aFKN0d5TQ5fC5iDvyr2ueYNFbA==", null, false, "45e82771-b98d-406b-98a9-68b17a70291e", false, "david.c" },
                    { "f7f37e47-e2bb-4cbb-9a5e-3bb218ac3ff5", 0, "6cb38a23-daf5-452a-889b-f3e94612d1d8", "jennifer.lewis@gmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAENF4EWmD63k0A0Yy4IPYTwvNfd4e6Yu5X4OIdlCLRnAFNk7t95B78qexu+mPelmYcg==", null, false, "574ddad3-406d-4dc5-92c9-16fea860265a", false, "jennifer.l" }
                });

            migrationBuilder.InsertData(
                table: "Types",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Condo" },
                    { 2, "Single Family House" },
                    { 3, "Apartment" },
                    { 4, "Duplex" },
                    { 5, "Townhouse" },
                    { 6, "Multi-Family Home" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f" });

            migrationBuilder.InsertData(
                table: "Properties",
                columns: new[] { "Id", "Address", "AgentId", "City", "ImageURL", "IsActive", "IsRentOut", "NumberOfBathroom", "NumberOfBedroom", "SquareFeet", "State", "TypeId", "ZipCode" },
                values: new object[,]
                {
                    { 1, "123 Main St", 1, "Nashville", "https://example.com/property1.jpg", true, true, 2, 2, 1500, "TN", 1, "37201" },
                    { 2, "456 Elm St", 2, "Hermitage", "https://example.com/property2.jpg", true, true, 2, 3, 1800, "TN", 2, "37076" },
                    { 3, "789 Oak St", 3, "Mt Juliet", "https://example.com/property3.jpg", true, true, 3, 4, 2000, "TN", 3, "37122" },
                    { 4, "101 Pine St", 4, "Green Hill", "https://example.com/property4.jpg", true, true, 1, 2, 1600, "TN", 4, "37138" },
                    { 5, "321 Oak Ln", 5, "Franklin", "https://example.com/property5.jpg", true, true, 2, 3, 2200, "TN", 5, "37064" },
                    { 6, "456 Willow Dr", 6, "Nashville", "https://example.com/property6.jpg", true, true, 1, 1, 1400, "TN", 6, "37209" },
                    { 7, "789 Elm St", 7, "Hermitage", "https://example.com/property7.jpg", true, true, 2, 3, 1800, "TN", 1, "37076" },
                    { 8, "543 Birch Ave", 8, "Nashville", "https://example.com/property8.jpg", true, true, 2, 4, 2500, "TN", 2, "37201" },
                    { 9, "101 Cedar St", 9, "Mt Juliet", "https://example.com/property9.jpg", true, true, 2, 3, 1800, "TN", 3, "37122" },
                    { 10, "789 Oak St", 10, "Franklin", "https://example.com/property10.jpg", true, true, 3, 4, 2000, "TN", 4, "37064" }
                });

            migrationBuilder.InsertData(
                table: "UserProfiles",
                columns: new[] { "Id", "Address", "AvatarURL", "City", "FirstName", "IdentityUserId", "IsActive", "JoinedDate", "LastName", "PhoneNumber", "State", "ZipCode" },
                values: new object[,]
                {
                    { 1, "101 Main Street", "https://example.com/avatar/adam.png", "Nashville", "Adam", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", true, new DateTime(2022, 10, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Welshman", "555-123-4567", "Tennessee", "37201" },
                    { 2, "202 Elm Street", "https://example.com/avatar/stacy.png", "Nashville", "Stacy", "a5be3ea4-57cd-471e-9b1f-d1ac68843c71", true, new DateTime(2022, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Lontoc", "555-234-5678", "Tennessee", "37202" },
                    { 3, "303 Oak Street", "https://example.com/avatar/john.png", "Nashville", "John", "a1a7f10d-4c4b-4a29-ba49-6ef932eafc9a", true, new DateTime(2022, 8, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doe", "555-345-6789", "Tennessee", "37203" },
                    { 4, "404 Pine Street", "https://example.com/avatar/jane.png", "Nashville", "Jane", "e1d0e366-1b4b-4c9c-8d99-3eefa7a6a430", true, new DateTime(2022, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Smith", "555-456-7890", "Tennessee", "37204" },
                    { 5, "505 Cedar Street", "https://example.com/avatar/robert.png", "Nashville", "Robert", "9a67ebd4-8f67-4f5b-9b0b-91c53fca6a6e", true, new DateTime(2022, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Johnson", "555-567-8901", "Tennessee", "37205" },
                    { 6, "606 Walnut Street", "https://example.com/avatar/susan.png", "Nashville", "Susan", "d6ec1cb6-8a5d-4f8a-9b3d-ee69d5b39fa2", true, new DateTime(2022, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Miller", "555-678-9012", "Tennessee", "37206" },
                    { 7, "707 Maple Street", "https://example.com/avatar/david.png", "Nashville", "David", "f3c4a859-5076-4624-95a9-d65c13a93cc6", true, new DateTime(2022, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Clark", "555-789-0123", "Tennessee", "37207" },
                    { 8, "808 Oak Street", "https://example.com/avatar/linda.png", "Nashville", "Linda", "7b499b14-0b71-4c2d-95fc-72585a4ce7d7", true, new DateTime(2022, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jackson", "555-890-1234", "Tennessee", "37208" },
                    { 9, "909 Pine Street", "https://example.com/avatar/william.png", "Nashville", "William", "62cbf9d0-8bb4-4f5f-ae8b-8f66c2083b8c", true, new DateTime(2022, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Thomas", "555-012-3456", "Tennessee", "37209" },
                    { 10, "1010 Elm Street", "https://example.com/avatar/mary.png", "Nashville", "Mary", "7454e186-7dca-4db2-90bf-192e24d9aa88", true, new DateTime(2022, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Roberts", "555-123-4567", "Tennessee", "37210" },
                    { 11, "111 Main Street", "https://example.com/avatar/james.png", "Nashville", "James", "3eb94ed3-c4f2-43c3-aa8d-d0f18e3cbfe2", true, new DateTime(2021, 12, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Harris", "555-234-5678", "Tennessee", "37211" },
                    { 12, "121 Elm Street", "https://example.com/avatar/jennifer.png", "Nashville", "Jennifer", "f7f37e47-e2bb-4cbb-9a5e-3bb218ac3ff5", true, new DateTime(2021, 11, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Lewis", "555-345-6789", "Tennessee", "37212" },
                    { 13, "131 Oak Street", "https://example.com/avatar/michael.png", "Nashville", "Michael", "9bea5400-fbe7-4fb9-b8ca-49c51b68c7a9", true, new DateTime(2021, 10, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Morris", "555-456-7890", "Tennessee", "37213" },
                    { 14, "141 Pine Street", "https://example.com/avatar/laura.png", "Nashville", "Laura", "398d39f2-5ce9-4c5e-bb8e-19a0a18b493f", true, new DateTime(2021, 9, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Peterson", "555-567-8901", "Tennessee", "37214" },
                    { 15, "151 Elm Street", "https://example.com/avatar/daniel.png", "Nashville", "Daniel", "256d7f3d-eb2d-48ec-ae0c-5f909a1259c1", true, new DateTime(2021, 8, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Brown", "555-678-9012", "Tennessee", "37215" },
                    { 16, "161 Oak Street", "https://example.com/avatar/sandra.png", "Nashville", "Sandra", "bde34669-9337-4e86-8a77-82e416531f63", true, new DateTime(2021, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Wilson", "555-789-0123", "Tennessee", "37216" },
                    { 17, "171 Pine Street", "https://example.com/avatar/kevin.png", "Nashville", "Kevin", "00b85f45-9c96-41c3-8dce-3acaf43964df", true, new DateTime(2021, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "King", "555-890-1234", "Tennessee", "37217" },
                    { 18, "181 Elm Street", "https://example.com/avatar/linda.png", "Nashville", "Linda", "e5d832b4-1e5d-4e61-9717-8c9509ed9d54", true, new DateTime(2021, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Garcia", "555-012-3456", "Tennessee", "37218" },
                    { 19, "191 Oak Street", "https://example.com/avatar/joseph.png", "Nashville", "Joseph", "3a5ebe8a-9a4a-46cc-8270-e789d8c115f9", true, new DateTime(2021, 4, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hernandez", "555-123-4567", "Tennessee", "37219" },
                    { 20, "201 Pine Street", "https://example.com/avatar/lisa.png", "Nashville", "Lisa", "694b216b-f0c3-49d4-8f14-1d786750ea6c", true, new DateTime(2021, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Martinez", "555-234-5678", "Tennessee", "37220" }
                });

            migrationBuilder.InsertData(
                table: "Agents",
                columns: new[] { "Id", "RealEstateLicenseNumber", "UserProfileId" },
                values: new object[,]
                {
                    { 1, 98765432, 1 },
                    { 2, 56781234, 2 },
                    { 3, 12345678, 3 },
                    { 4, 87654321, 4 },
                    { 5, 54321678, 5 },
                    { 6, 34567812, 6 },
                    { 7, 21678345, 7 },
                    { 8, 16783456, 8 },
                    { 9, 67834561, 9 },
                    { 10, 78345612, 10 }
                });

            migrationBuilder.InsertData(
                table: "Investors",
                columns: new[] { "Id", "Company", "UserProfileId" },
                values: new object[,]
                {
                    { 1, "Dream Home Investments", 11 },
                    { 2, "Prime Property Holdings", 12 },
                    { 3, "Prosperity Estates", 13 },
                    { 4, "Urban Capital Ventures", 14 },
                    { 5, "Golden Gate Realty Group", 15 },
                    { 6, "Horizon Properties, Inc.", 16 },
                    { 7, "Evergreen Investments", 17 },
                    { 8, "Oasis Real Estate Partners", 18 },
                    { 9, "Silver Key Realty Trust", 19 },
                    { 10, "Liberty Land Investments", 20 }
                });

            migrationBuilder.InsertData(
                table: "PropertyInvestors",
                columns: new[] { "Id", "InvestorId", "PropertyId" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 2, 2 },
                    { 3, 3, 3 },
                    { 4, 4, 4 },
                    { 5, 5, 5 },
                    { 6, 6, 6 },
                    { 7, 7, 7 },
                    { 8, 8, 8 },
                    { 9, 9, 9 },
                    { 10, 10, 10 },
                    { 11, 5, 1 },
                    { 12, 6, 2 },
                    { 13, 7, 3 },
                    { 14, 8, 4 },
                    { 15, 9, 5 },
                    { 16, 10, 6 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Agents_UserProfileId",
                table: "Agents",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cashflows_CategoryId",
                table: "Cashflows",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Cashflows_PropertyId",
                table: "Cashflows",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_Investors_UserProfileId",
                table: "Investors",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_TypeId",
                table: "Properties",
                column: "TypeId");

            migrationBuilder.CreateIndex(
                name: "IX_PropertyInvestors_InvestorId",
                table: "PropertyInvestors",
                column: "InvestorId");

            migrationBuilder.CreateIndex(
                name: "IX_PropertyInvestors_PropertyId",
                table: "PropertyInvestors",
                column: "PropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_IdentityUserId",
                table: "UserProfiles",
                column: "IdentityUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agents");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Cashflows");

            migrationBuilder.DropTable(
                name: "PropertyInvestors");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Investors");

            migrationBuilder.DropTable(
                name: "Properties");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "Types");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
