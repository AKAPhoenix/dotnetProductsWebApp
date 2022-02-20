using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ProductJsonData.Models;

namespace ProductJsonData.Pages.Products
{
    public class ProductsListModel : PageModel
    {
        public Product[] productsList = { new Product("iphone 12", 100000), new Product("Samsung Galaxy", 800000) };
        public void OnGet()
        {

        }
    }
}
