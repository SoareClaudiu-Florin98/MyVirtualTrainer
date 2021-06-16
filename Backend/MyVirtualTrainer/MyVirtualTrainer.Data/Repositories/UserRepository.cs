using MyVirtualTrainer.Data.Database;
using MyVirtualTrainer.Data.Entities;
using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(MyVirtualTrainerDbContext myVirtualTrainerDbContext) : base(myVirtualTrainerDbContext)
        { }
        public bool ExistsEmail(User user)
        {
            try
            {
                var result = database.Set<User>().SingleOrDefault(dbUser => dbUser.Email == user.Email);
                if (result == null)
                {
                    return false;
                }
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return true;
        }
    }
}
