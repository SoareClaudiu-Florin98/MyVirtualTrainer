using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MyVirtualTrainer.Api.Helpers;
using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Api.Models;
using MyVirtualTrainer.Data.Entities;
using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;
        private readonly AppSettings appSettings;
        public UserService(IOptions<AppSettings> appSettings, IUserRepository userRepository)
        {
            this.appSettings = appSettings.Value;
            this.userRepository = userRepository;

        }


        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var _users = userRepository.GetByAll();
            var user = _users.SingleOrDefault(x => x.Email == model.Email);
            bool verified = false;
            try
            {
                if (user != null && model != null)
                {
                    verified = BCrypt.Net.BCrypt.Verify(model.Password, user.Password);
                }

            }
            catch (Exception)
            {
                verified = false;

            }

            if (user == null || verified == false) { return null; }

            var token = GenerateJwtToken(user);

            return new AuthenticateResponse(user, token);

        }
        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appSettings.Secret));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public IEnumerable<User> GetAll()
        {
            return userRepository.GetByAll();
        }

        public User GetById(int id)
        {
            return userRepository.GetByAll().FirstOrDefault(x => x.Id == id);

        }

        public void InsertUser(User user)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = passwordHash;
            userRepository.Insert(user);
        }

        public void UpdateUser(User user)
        {
            userRepository.Update(user);

        }

        public bool IsValidPassword(User user)
        {
            var regex = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*[#^\s-])[A-Za-z\d@$!%*?&#^].{8,30}$";
            var mc = Regex.Match(user.Password, regex, RegexOptions.IgnoreCase);
            if (!mc.Success)
            {
                return false;
            }
            return true;

        }

        public bool IsValidEmail(User user)
        {
            var regex = @"^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$";
            var mc = Regex.Match(user.Email, regex, RegexOptions.IgnoreCase);
            if (!mc.Success)
            {
                return false;
            }
            return true;

        }

        public bool IsValidName(User user)
        {
            var regex = @"^([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)(?!.*[#^\s-]){2,30}";
            var mc = Regex.Match(user.Name, regex, RegexOptions.IgnoreCase);
            if (!mc.Success)
            {
                return false;
            }
            return true;
        }
        public bool ExistEmail(User user)
        {
            if (!userRepository.ExistsEmail(user)) { return false; }
            return true;
        }
    }
}
