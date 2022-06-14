using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mini_Library_Project.Models;
using System.Threading.Tasks;

namespace Mini_Library_Project.Controllers
{
    public class SignUpController : Controller
    {
        private readonly UserManager<UserCredentials> _userManager;
        private readonly SignInManager<UserCredentials> _signInManager;

        public SignUpController(UserManager<UserCredentials> userManager,
                                      SignInManager<UserCredentials> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [Authorize]
        public IActionResult Index(UserCredentials user)
        {
            return View(user);
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(SignUp usercred)
        {

            if (ModelState.IsValid)
            {
                var user = new UserCredentials
                {
                    UserName = usercred.UserName,
                    Email = usercred.Email,
                    Firstname=usercred.Firstname,
                    Lastname=usercred.Lastname,
                };
                var result = await _userManager.CreateAsync(user, usercred.Password);

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);

                    return RedirectToAction("index", "SignUp",user);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }

                ModelState.AddModelError(string.Empty, "Invalid Login Attempt");
            }
            return View();
        }
    }
}

