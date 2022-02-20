namespace ProductJsonData.Models
{
    public class Product
    {
        public Product(string name,int price)
        {
            this.name = name;
            this.price = price;
        }
        public string name { get; set; }
        public int price { get; set; }
    }
}
