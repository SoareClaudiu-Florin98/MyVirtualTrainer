using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Data.Entities;
using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository postRepository;

        public PostService(IPostRepository postRepository)
        {
            this.postRepository = postRepository; 
        }
        public IEnumerable<Post> GetAll()
        {
            return postRepository.GetByAll();
        }

        public Post GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void InsertPost(Post post)
        {
            post.PublishingDate = DateTime.Now; 
            postRepository.Insert(post); 
        }
    }
}
