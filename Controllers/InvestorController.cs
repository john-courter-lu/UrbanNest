using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UrbanNest.Data;
using UrbanNest.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace UrbanNest.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InvestorController : ControllerBase
{
    private UrbanNestDbContext _dbContext;

    public InvestorController(UrbanNestDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Investors
         .Include(a => a.UserProfile)
         .ThenInclude(up => up.IdentityUser)
        
        .ToList());
    }
}