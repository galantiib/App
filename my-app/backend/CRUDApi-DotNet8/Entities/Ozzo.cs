using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDApi_DotNet8.Entities
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Components { get; set; }
        public decimal Price { get; set; }
    }
}
