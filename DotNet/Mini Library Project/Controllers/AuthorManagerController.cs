using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mini_Library_Project.Models;
using System;
using System.Threading.Tasks;

namespace Mini_Library_Project.Controllers
{
    public class AuthorManagerController : Controller
    {
        private readonly RoleManager<IdentityRole> _rolemanager;
        private readonly UserManager<UserCredentials> _usermanager;
        private readonly AppDBContext<UserCredentials> _context;
        public AuthorManagerController(AppDBContext<UserCredentials> context, RoleManager<IdentityRole> rolemanager, UserManager<UserCredentials> usermanager)
        {
            this._rolemanager = rolemanager;
            this._usermanager = usermanager;
            this._context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult AddAuthor()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> AddAuthor(Author newauthor)
        {
            try
            {
                newauthor.DateAdded = DateTime.Now;
                var result = await _context.Authors.AddAsync(newauthor);
                await _context.SaveChangesAsync();
                ViewBag.AuthorAdded = "The Author has been Added Successfully";
            }
            catch (Exception e)
            {
                ViewBag.AuthorAdded = $"{e.Message}";
            }
            return View();
        }
    }
}
