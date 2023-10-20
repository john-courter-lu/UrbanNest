using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UrbanNest.Data;
using UrbanNest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace UrbanNest.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PropertyController : ControllerBase
{
    private UrbanNestDbContext _dbContext;

    public PropertyController(UrbanNestDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Properties
                    .Include(p => p.Type)
                    .Include(p => p.Agent)
                        .ThenInclude(a => a.UserProfile)
                    .ToList());
    }

    // Get Property Details by Id
    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetById(int id)
    {
        var property = _dbContext
            .Properties
            .Include(p => p.Type)
            .Include(p => p.Agent)
                .ThenInclude(a => a.UserProfile)
            .Include(p => p.PropertyInvestors)

            .SingleOrDefault(p => p.Id == id);

        if (property == null)
        {
            return NotFound();
        }

        return Ok(property);
    }

    // Get Property Count 
    [HttpGet("inventory")]
    [Authorize]
    public IActionResult Inventory()
    {
        int inventory = _dbContext
        .Properties
        .Where(p => p.IsActive == true)
        .Count();

        return Ok(inventory);
    }
}