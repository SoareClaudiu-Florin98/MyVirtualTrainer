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
        private readonly IFoodService foodService;
        public UserController(IUserService userService , IFoodService foodService)
        {

            this.userService = userService;
            this.foodService = foodService; 

        }
        [Route("update")]
        [HttpPut]
        public IActionResult UpdateUser([FromBody] User user )
        {
            userService.UpdateUser(user); 
            return Ok(new { message= "succes"});
        }
        [Route("updateFood")]
        [HttpPut]
        public IActionResult UpdateUserFood([FromBody]  User user)
        {

            userService.UpdateUser(user); 
            return Ok(new { message = "succes" });
        }
        [Route("getFood/{userId}")]
        [HttpGet]
        public IActionResult GetUserFoods(int userId)
        {

                return Ok(foodService.GetByUserId(userId));

        }
    }

}
