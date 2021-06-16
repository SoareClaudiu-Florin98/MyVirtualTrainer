using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        bool ExistsEmail(User user);

    }
}
