using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MyVirtualTrainer.Data.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVirtualTrainer.Data
{
    public static class  ServiceCollectionExtension
    {
        public static IServiceCollection AddMyVirtualTrainerRepositories(this IServiceCollection services)
        {
            services.AddDbContext<MyVirtualTrainerDbContext>(
            options => options.UseSqlServer(@"Data Source=localhost;Initial Catalog=MyVirtualTrainer;Integrated Security=True; MultipleActiveResultSets=true ").EnableSensitiveDataLogging());

            return services;
        }
        public static IServiceCollection AddMyVirtualTrainerServices(this IServiceCollection services)
        {

            return services;
        }

    }
}
