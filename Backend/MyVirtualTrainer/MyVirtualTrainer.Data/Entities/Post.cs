using MyVirtualTrainer.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Entities
{
    public class Post : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public virtual User User { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Image { get; set; }

    }
}
