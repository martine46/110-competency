using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace dotnet2.Models{

    public class DataContext : DbContext{

            public DataContext(DbContextOptions<DataContext> options) : base(options){

            }

        public DbSet<Car> Cars {get; set;}




    }

}
