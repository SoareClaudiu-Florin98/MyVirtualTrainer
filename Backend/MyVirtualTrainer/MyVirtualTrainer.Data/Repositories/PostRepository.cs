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
    public class PostRepository: GenericRepository<Post>,IPostRepository
    {
        public PostRepository(MyVirtualTrainerDbContext myVirtualTrainerDbContext) : base(myVirtualTrainerDbContext)
        { }
    }
}
