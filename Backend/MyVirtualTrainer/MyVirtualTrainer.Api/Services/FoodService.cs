using MyVirtualTrainer.Api.Interfaces;
using MyVirtualTrainer.Data.Entities;
using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Api.Services
{
    public class FoodService : IFoodService
    {
        private readonly IFoodRepository foodRepository;
        private readonly IUserRepository userRepository;
        public FoodService(IFoodRepository foodRepository , IUserRepository userRepository)
        {
            this.foodRepository = foodRepository;
            this.userRepository = userRepository; 


        }
        public IEnumerable<Food> GetAll()
        {
            return foodRepository.GetByAll();
        }

        public Food GetById(int id)
        {
            return foodRepository.GetByAll().FirstOrDefault(x => x.Id == id);

        }

        public ICollection<Food> GetByUserId(int id)
        {

            ICollection<Food> foods = new List<Food>(); 
            foreach( var food in foodRepository.GetByAll())
            {
                if(food.UserId == id)
                {
                    foods.Add(food); 
                }
            }

              return foods; 
        }



    }
}
