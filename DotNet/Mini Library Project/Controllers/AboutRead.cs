using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mini_Library_Project.Controllers
{
    public class AboutRead : Controller
    {
        // GET: AboutRead
        public ActionResult BooksAvailable()
        {
            return View();
        }

        public ActionResult CurrentlyReading()
        {
            return View();
        }
        public ActionResult AlreadyRead()
        {
            return View();
        }
    }
}
