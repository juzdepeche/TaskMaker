using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskMaker.Models;
using TaskMaker.services;

namespace TaskMaker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;
        private readonly IJwtAuthentificationManager _jwtAuthentificationManager;

        public UsersController(UserContext context, IJwtAuthentificationManager jwtAuthentificationManager)
        {
            _context = context;
            _jwtAuthentificationManager = jwtAuthentificationManager;
        }
        
        [HttpGet("isLoggedIn")]
        public bool Get()
        {
            return User.Identity.IsAuthenticated;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async System.Threading.Tasks.Task<IActionResult> Authenticate([FromBody] User user)
        {
            var users = await _context.Users.ToListAsync();
            var token = _jwtAuthentificationManager.Authenticate(users, user.Username, user.Password);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }
    }
}
