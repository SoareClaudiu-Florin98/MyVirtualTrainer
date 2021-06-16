using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Services
{
    public class JwtService
    {
		private string mySecret = "thisIsASecurityKey";

		public string GenerateJWT(int userId)
		{
			var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(mySecret));
			var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
			var header = new JwtHeader(credentials);

			var payload = new JwtPayload(userId.ToString(), null, null, null, DateTime.Today.AddDays(1));

			var securityToken = new JwtSecurityToken(header, payload);

			return new JwtSecurityTokenHandler().WriteToken(securityToken);
		}

		public JwtSecurityToken Verify(string jwt)
		{
			try
			{
				var tokenHandler = new JwtSecurityTokenHandler();
				var key = Encoding.ASCII.GetBytes(mySecret);

				tokenHandler.ValidateToken(jwt, new TokenValidationParameters
				{
					IssuerSigningKey = new SymmetricSecurityKey(key),
					ValidateIssuerSigningKey = true,
					ValidateIssuer = false,
					ValidateAudience = false
				}, out SecurityToken validatedToken);

				return (JwtSecurityToken)validatedToken;
			}
			catch
			{
				return null;
			}
		}
	}

}
