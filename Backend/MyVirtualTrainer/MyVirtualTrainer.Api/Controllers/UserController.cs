using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : Controller
    {
        private readonly IUserService userService;
        public UserController(IUserService userService)
        {

            this.userService = userService;

        }
        [Route("update")]
        [HttpPut]
        public IActionResult UpdateUser([FromBody] User user )
        {
            userService.UpdateUser(user); 
            return Ok(new { message= "succes"});
        }


    }
}
