using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Entities
{
     public class Food : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Calories { get; set; }
        public float Weight { get; set; }
        public float Carbs { get; set;  }
        public float Fat { get; set; }
        public float Fiber { get; set; }
        public float Protein { get; set; }
        public float Calcium { get; set; }
        public string MealType { get; set; }
        public DateTime Date { get; set; }

        public virtual User IdUser { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
    }
}
