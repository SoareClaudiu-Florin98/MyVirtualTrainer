using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data.Interfaces
{
    public interface IRepository<TEntity> where TEntity : IEntity
    {

        TEntity GetById(int id);

        IEnumerable<TEntity> GetByAll();

        void Insert(TEntity entity);

        void Update(TEntity entity);

        void Delete(TEntity entity);
    }
}
