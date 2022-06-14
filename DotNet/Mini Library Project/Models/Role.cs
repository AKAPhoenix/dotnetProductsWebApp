using System.ComponentModel.DataAnnotations;

namespace Mini_Library_Project.Models
{
    public class Role
    {
        [Required]
        public string RoleName { get; set; }
    }
}
