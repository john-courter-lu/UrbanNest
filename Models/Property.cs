using System.ComponentModel.DataAnnotations;

namespace UrbanNest.Models;

public class Property
{
    public int Id { get; set; }
    public int AgentId { get; set; }
    public Agent Agent { get; set; }
    [Required]
    public string Address { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public string State { get; set; }
    [Required]
    public string ZipCode { get; set; }
    public bool IsActive { get; set; }
    public bool IsRentOut { get; set; }

    [DataType(DataType.Url)]
    [MaxLength(255)]
    public string ImageURL { get; set; }

    public int SquareFeet { get; set; }
    public int NumberOfBedroom { get; set; }
    public int NumberOfBathroom { get; set; }
    public int TypeId { get; set; }
    public Type Type { get; set; }
    public List<Cashflow> Cashflows { get; set; }
    public List<PropertyInvestor> PropertyInvestors { get; set; }
}