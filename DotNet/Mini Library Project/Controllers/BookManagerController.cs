using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mini_Library_Project.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Mini_Library_Project.Controllers
{
    [Authorize(Roles="Admin")]
    public class BookManagerController : Controller
    {
        private RoleManager<IdentityRole> _rolemanager;
        private UserManager<UserCredentials> _usermanager;
        private AppDBContext<UserCredentials> _context;
        public BookManagerController(AppDBContext<UserCredentials> context,RoleManager<IdentityRole> rolemanager, UserManager<UserCredentials> usermanager)
        {
            this._rolemanager = rolemanager;
            this._usermanager = usermanager;
            this._context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> AddBooks(BookHelper bookhelper)
        {
            try
            {
                var author = _context.Authors.Where((c)=>c.Name==bookhelper.AuthorName).FirstOrDefault();
                Book newbook = new Book
                {
                    Author = author,
                    Title = bookhelper.Title,
                    DateAdded = DateTime.Now
                };
                
                var result = await _context.Books.AddAsync(newbook);
                await _context.SaveChangesAsync();
                ViewBag.BookAdded = "The Book has been Added Successfully";
            }
            catch (Exception e)
            {
                ViewBag.BookAdded = $"{e.Message}";
            }
            return View();
        }
        [HttpGet]
        public IActionResult AddBooks()
        {
            ViewBag.BookAdded = "In AddBooks Get Method";
            return View();
        }
        [HttpGet]
        public IActionResult ListBooksAndAuthors()
        {
            var bkandauth=_context.Books.ToList(); 
            return View(bkandauth);
        }
    }
}
