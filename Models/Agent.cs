

namespace UrbanNest.Models;
public class Agent
{
    public int Id { get; set; }
    public int RealEstateLicenseNumber { get; set; }

    public int UserProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
}