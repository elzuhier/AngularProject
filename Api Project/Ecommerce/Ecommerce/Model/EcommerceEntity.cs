using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Model
{
    public class EcommerceEntity: IdentityDbContext<ApplicationUser>
    {
        public EcommerceEntity()
        {

        }
        public EcommerceEntity(DbContextOptions options) : base(options)
        {

        }
        public DbSet<category> categories { get; set; }
        public DbSet<product> products { get; set; }
    }
}
