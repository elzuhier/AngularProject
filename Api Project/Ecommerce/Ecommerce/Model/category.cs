using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Ecommerce.Model
{
    public class category
    {
        public int id { get; set; }
        public string name { get; set; }

        [JsonIgnore]
        public virtual List<product> products { get; set; }

    }
}
