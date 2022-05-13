using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.Model
{
    public class product
    {
        public int id { get; set; }
        public string name { get; set; }
        public int quantity { get; set; }
        public string image { get; set; }
        public int price { get; set; }
        [ForeignKey("Category")]
        public int catId { get; set; }
        public virtual category Category { get; set; }
    }
}
