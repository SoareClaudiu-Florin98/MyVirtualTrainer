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
        [Route("updateFood")]
        [HttpPost]
        public IActionResult UpdateUserFood([FromBody] Food food)
        {
            var contextUser =(User) HttpContext.Items["User"];

            var foods = contextUser.Foods;
            if (foods != null)
            {
                foods.Add(new Food
                {
                    Calories = food.Calories,
                    Weight = food.Weight,
                    Protein = food.Protein,
                    Calcium = food.Calcium,
                    Carbs = food.Carbs,
                    Date = food.Date,
                    Fat = food.Fat,
                    Fiber = food.Fiber,
                    MealType = food.MealType
                });

            }
            else
            {
                ICollection<Food> newFoods = new List<Food>();
                newFoods.Add(food);
                foods = newFoods; 
            }

            contextUser.Foods = foods; 
            userService.UpdateUser(contextUser); 

            return Ok(new { message = "succes" });
        }


    }
}
