using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskMaker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IJwtAuthentificationManager jwtAuthentificationManager;

        public UserController(IJwtAuthentificationManager jwtAuthentificationManager)
        {
            this.jwtAuthentificationManager = jwtAuthentificationManager;
        }

        [HttpGet("isLoggedIn")]
        public bool Get()
        {
            return User.Identity.IsAuthenticated;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] UserCredentials userCredentials)
        {
            var token = jwtAuthentificationManager.Authenticate(userCredentials.Username, userCredentials.Password);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }
    }
}
