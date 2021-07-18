using Microsoft.AspNetCore.Mvc;
using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Controllers
{
    [ApiController]
    [Route("post")]
    public class PostController : Controller
    {
        private readonly IPostService postService;
        public PostController(IPostService postService)
        {
            this.postService = postService; 

        }


        [HttpGet]
        [Route("getPosts")]
        public IActionResult GetAllPosts()
        {
            var posts = postService.GetAll(); 
           
            return Ok(posts);
        }



        [Route("addPost")]
        [HttpPost]
        public IActionResult AddPost([FromBody]  Post post )
        {
            postService.InsertPost(post); 
            return Ok(post); 
        }
    }
}
