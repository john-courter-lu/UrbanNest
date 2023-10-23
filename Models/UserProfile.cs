using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace UrbanNest.Models;
public class UserProfile
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }

    [NotMapped] // NotMapped: ER Core will not create column for this property in DB
    public string UserName { get; set; }

    [NotMapped]
    public string Email { get; set; }

    public string Address { get; set; }

    public string City { get; set; }

    public string State { get; set; }

    public string ZipCode { get; set; }

    public string PhoneNumber { get; set; }

    public DateTime JoinedDate { get; set; }

    public bool IsActive { get; set; }

    [DataType(DataType.Url)]
    [MaxLength(255)]
    public string AvatarURL { get; set; }

    public string IdentityUserId { get; set; }

    public IdentityUser IdentityUser { get; set; }

    [NotMapped]
    public List<string> Roles { get; set; }

    // Calculated property:
    public string FullName => $"{FirstName} {LastName}";

}