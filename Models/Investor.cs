namespace UrbanNest.Models;

public class Investor
{
    public int Id { get; set; }
    public string Company { get; set; }
    public int UserProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
    public List<PropertyInvestor> PropertyInvestors { get; set; }
}