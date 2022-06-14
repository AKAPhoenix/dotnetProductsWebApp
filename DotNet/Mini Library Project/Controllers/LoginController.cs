using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mini_Library_Project.Models;
using System.Threading.Tasks;

namespace Mini_Library_Project.Controllers
{
    public class LoginController : Controller
    {
        private readonly UserManager<UserCredentials> _userManager;
        private readonly SignInManager<UserCredentials> _signInManager;
        public LoginController(UserManager<UserCredentials> userManager, SignInManager<UserCredentials> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpPost]
        public bool authenticate(UserCredentials obj)
        {
            return false;
        }
        [HttpGet]
        public bool authenticate()
        {
            return true;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult LoginForm()
        {
            return View();
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> LoginForm(Login user)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(user.Username, user.Password, true, false);

                if (result.Succeeded)
                {
                    UserCredentials user_details = await _userManager.FindByNameAsync(user.Username);
                    return RedirectToAction("Dashboard", "Login", user_details);
                }

                ModelState.AddModelError(string.Empty, "Invalid Login Attempt");


            }
            return View(user);
        }
        public IActionResult Dashboard(UserCredentials user) {
            return View(user);
        }
    }
}
