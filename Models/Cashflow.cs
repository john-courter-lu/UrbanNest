using System.ComponentModel.DataAnnotations;

namespace UrbanNest.Models;
public class Cashflow
{
    public int Id { get; set; }
    [Required]
    public decimal Amount { get; set; }
    public int CategoryId { get; set; }
    public int PropertyId { get; set; }
    public bool IsPositiveOrNegative { get; set; }
    public string Date { get; set; }
    public Category Category { get; set; }
    public Property Property { get; set; }
}