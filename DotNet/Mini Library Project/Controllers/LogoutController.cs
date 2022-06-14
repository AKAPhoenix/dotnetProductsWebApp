using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mini_Library_Project.Models;
using System;

namespace Mini_Library_Project.Controllers
{
    public class LogoutController : Controller
    {
        UserManager<UserCredentials> _usermanager;
        SignInManager<UserCredentials> _signinmanager;
        public LogoutController(UserManager<UserCredentials> usermanager, SignInManager<UserCredentials> signinmanager)
        {
            _usermanager = usermanager;
            _signinmanager = signinmanager;

        }
        public IActionResult Index()
        {
            return View();
        }
        public async void Logout()
        {
            await _signinmanager.SignOutAsync();
            RedirectToAction("LoginForm","Login");
        }
    }
}
