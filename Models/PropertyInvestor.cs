

namespace UrbanNest.Models;
public class PropertyInvestor
{
    public int Id { get; set; }
    public int PropertyId { get; set; }
    public int InvestorId { get; set; }
    public Property Property { get; set; }
    public Investor Investor { get; set; }
}