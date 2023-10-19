using System.ComponentModel.DataAnnotations;

namespace UrbanNest.Models;
public class Category
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public bool IsRevenueOrExpense { get; set; }
    public bool IsOperational { get; set; }
    public List<Cashflow> Cashflows { get; set; }
}