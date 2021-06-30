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
    public class FoodRepository :GenericRepository<Food>, IFoodRepository
    {
        public FoodRepository(MyVirtualTrainerDbContext myVirtualTrainerDbContext) : base(myVirtualTrainerDbContext)
        { }
    }
}
