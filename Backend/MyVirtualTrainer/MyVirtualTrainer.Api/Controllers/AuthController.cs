using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyVirtualTrainer.Api.Helpers;
using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Api.Models;
using MyVirtualTrainer.Data.Entities;
using System;


namespace MyVirtualTrainer.Api.Controllers
{
	[ApiController]
	[Route("auth")]
	public class AuthController : ControllerBase
	{
        private readonly IUserService userService;
        public AuthController(IUserService userService)
        {

            this.userService = userService;

        }
		[HttpPost]
		[Route("login")]

		public IActionResult Authenticate([FromBody] AuthenticateRequest model)
		{

			var response = userService.Authenticate(model);

			if (response == null)
			{
				return BadRequest(new { message = "Username or password is incorrect" });
			}

			Response.Cookies.Append("jwt", response.Token, new CookieOptions { HttpOnly = false, Secure = true, SameSite = SameSiteMode.None,IsEssential = true, Expires = DateTime.Now.AddDays(7) });

			return Ok(response);
		}
		[Route("register")]
		[HttpPost]
		public IActionResult Register([FromBody] User user)
		{
			if (!userService.IsValidEmail(user))
			{
				return BadRequest(new { message = "Email is invalid!" }); ;
			}
			if (!userService.IsValidPassword(user))
			{
				return BadRequest(new { message = "Password is invalid!" }); ;
			}

			if (!userService.IsValidName(user))
			{
				return BadRequest(new { message = "Name is invalid!" }); ;
			}
			if (userService.ExistEmail(user))
			{
				return BadRequest(new { message = "This email address is already being used!" }); ;
			}
			userService.InsertUser(user);
			return Ok(user);
		}
		[Authorize]
		[Route("user")]
		[HttpGet]
		public IActionResult GetUser()
		{
			if (Request.Cookies["jwt"] != null)
			{
				var contextUser = HttpContext.Items["User"];
				return Ok(contextUser);
			}
			return null; 
		}

	}
}
