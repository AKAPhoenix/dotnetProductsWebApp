using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Mini_Library_Project.Models;
using System.Threading.Tasks;

namespace Mini_Library_Project.Controllers
{
    [Authorize(Roles="Admin")]
    public class AdminController : Controller
    {
        RoleManager<IdentityRole> _rolemanager;
        UserManager<UserCredentials> _usermanager;
        public AdminController(RoleManager<IdentityRole> rolemanager, UserManager<UserCredentials> usermanager)
        {
            this._rolemanager=rolemanager;
            this._usermanager=usermanager;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateRoleForUserPost(RoleForUser role_for_user)
        {
            UserCredentials user=await _usermanager.FindByEmailAsync(role_for_user.Email);
            IdentityResult result = await _usermanager.AddToRoleAsync(user, role_for_user.Role);
            ViewBag.CreateRoleForUserResult=$"{role_for_user.Email} has been successfully added to {role_for_user.Role}";
            //return RedirectToAction("CreateRoleForUserPost");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> RemoveUserFromRolePost(RoleForUser role_for_user)
        {
            UserCredentials user = await _usermanager.FindByEmailAsync(role_for_user.Email);
            IdentityResult result = await _usermanager.RemoveFromRoleAsync(user, role_for_user.Role);
            ViewBag.RemoveRoleFromUserResult = $"{role_for_user.Email} has been successfully removed from {role_for_user.Role}";
            //return RedirectToAction("RemoveUserFromRolePost");
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> AddRole(Role rolenm)
        {
            IdentityRole role = new IdentityRole { Name = rolenm.RoleName };
            
            IdentityResult result = await _rolemanager.CreateAsync(role);
            ViewBag.AddRole = $"{rolenm.RoleName} has been successfully Added";
            //return RedirectToAction("AddRole");
            return View();
        }
        [HttpGet]
        public IActionResult AddRole()
        {
            //ViewBag.AddRole = $"RoleName has been successfully Added";
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> RemoveRole(Role rolenm)
        {
            IdentityRole role = await _rolemanager.FindByNameAsync(rolenm.RoleName);
            IdentityResult result = await _rolemanager.DeleteAsync(role);
            ViewBag.RemoveRole = $"{rolenm.RoleName} has been successfully removed";
            //return RedirectToAction("RemoveRole");
            return View();
        }
        [HttpGet]
        public IActionResult RemoveRole()
        {
            //ViewBag.RemoveRole = $"RoleName has been successfully removed";
            return View();
        }
        [HttpGet]
        public IActionResult CreateRoleForUserPost()
        {
            return View();
        }

        [HttpGet]
        public IActionResult RemoveUserFromRolePost()
        {
            return View();
        }

        [HttpGet]
        public IActionResult ManageRoles()
        {
            return View();
        }
        [HttpGet]
        public IActionResult ListRoles()
        {
            return View();
        }
        [HttpGet]
        public IActionResult ListUsers()
        {
            return View();
        }
    }
}
