using MyVirtualTrainer.Api.Models;
using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Interfaces
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        IEnumerable<User> GetAll();
        User GetById(int id);
        void InsertUser(User user);
        public void UpdateUser(User user);
        bool IsValidPassword(User user);
        bool IsValidEmail(User user);
        bool IsValidName(User user);

        public bool ExistEmail(User user);
    }
}
