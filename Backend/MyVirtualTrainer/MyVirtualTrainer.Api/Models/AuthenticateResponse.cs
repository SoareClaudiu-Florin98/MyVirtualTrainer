using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Models
{
    public class AuthenticateResponse
    {
		public int Id { get; set; }
		public string Email { get; set; }
		public string Token { get; set; }

		public AuthenticateResponse(User user, string token)
		{
			Id = user.Id;
			Email = user.Email;
			Token = token;
		}
	}
}
