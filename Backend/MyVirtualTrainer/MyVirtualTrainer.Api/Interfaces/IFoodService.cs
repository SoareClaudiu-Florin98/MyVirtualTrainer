using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Interfaces
{
    public interface IFoodService
    {
        IEnumerable<Food> GetAll();
        Food GetById(int id);
        ICollection<Food> GetByUserId(int id);
    }
}
