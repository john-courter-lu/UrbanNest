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

    // Get All Properties with Agent Info
    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Properties
                    .Include(p => p.Type)
                    .Include(p => p.Agent) // will not show Properties whose AgentId is 0
                        .ThenInclude(a => a.UserProfile)
                    .OrderByDescending(p => p.Id) // newly added property will be on top
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
            .Include(p => p.Agent) // will return "404 NOT FOUND" if newly created Property's AgentId is 0/ unassigned
                .ThenInclude(a => a.UserProfile)
            .Include(p => p.Agent)
                .ThenInclude(a => a.Properties)
            .Include(p => p.PropertyInvestors) // will be ok and return empty array if newly created Property's Investors is unassigned
                .ThenInclude(pi => pi.Investor)
                    .ThenInclude(a => a.UserProfile)
            .SingleOrDefault(p => p.Id == id);

        if (property == null)
        {
            return NotFound();
        }

        return Ok(property);
    }

    // Get Active Property Count 
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

    // post a new property
    [HttpPost] // /api/property/
    [Authorize]
    public IActionResult CreateProperty(Property property)
    {
        // add request validation
        if (property == null)
        {
            return BadRequest("Invalid property data.");
        }

        // Further validation to check if a property with the same name already exists
        var existingProperty = _dbContext.Properties.FirstOrDefault(c => c.Address == property.Address);
        if (existingProperty != null)
        {
            return BadRequest("A property with the same address already exists.");
        }

        // Error Handling
        try
        {
            _dbContext.Properties.Add(property);
            _dbContext.SaveChanges();

            return Created($"/api/property/{property.Id}", property);
        }
        catch (Exception ex)
        {
            // Log the exception and return an appropriate error response.
            return StatusCode(500, "An error occurred while creating the property.");
        }
    }

    // JSON body for testing
    /* 

    "AgentId" has to be assigned, otherwise will be 0, and won't show up at api/Property or api/Property/{id} (will return 404)

    {
    "Address": "569 Main St",
    "AgentId": 1, 
    "City": "Nashville",
    "State": "TN",
    "ZipCode": "37201",
    "isActive": true,
    "SquareFeet": 1500,
    "NumberOfBedroom": 3,
    "NumberOfBathroom": 2,
    "TypeId": 2
    }

     */


}