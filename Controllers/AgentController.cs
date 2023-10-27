using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UrbanNest.Data;
using UrbanNest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace UrbanNest.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AgentController : ControllerBase
{
    private UrbanNestDbContext _dbContext;

    public AgentController(UrbanNestDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Agents
         .Include(a => a.UserProfile)
            .ThenInclude(up => up.IdentityUser)
         .Include(a => a.Properties)

        .ToList());
    }

    // Update the IsActive columns of the Agent table     
    [HttpPut("deactivate/{id}")] // /api/Agent/deactivate/{id}
    [Authorize]
    public IActionResult UpdateAgent(int id)
    {
        Agent Agent = _dbContext.Agents.SingleOrDefault(c => c.Id == id);

        if (Agent == null)
        {
            return NotFound();
        }

        UserProfile foundUserProfile = _dbContext.UserProfiles.SingleOrDefault(up => up.Id == Agent.UserProfileId);

        if (foundUserProfile == null)
        {
            return NotFound();
        }

        foundUserProfile.IsActive = !foundUserProfile.IsActive;

        _dbContext.SaveChanges();

        return NoContent();
    }
    /* no JSON body to test, just pass the id */


}

