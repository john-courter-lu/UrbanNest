using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UrbanNest.Data;
using Microsoft.EntityFrameworkCore;

namespace UrbanNest.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TypeController : ControllerBase
{
    private UrbanNestDbContext _dbContext;

    public TypeController(UrbanNestDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Types
        .ToList());
    }
}