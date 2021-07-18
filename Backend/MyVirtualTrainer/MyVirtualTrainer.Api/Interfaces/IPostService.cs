using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Interfaces
{
    public interface IPostService
    {
        IEnumerable<Post> GetAll();
        Post GetById(int id);
        void InsertPost(Post post);

    }
}
