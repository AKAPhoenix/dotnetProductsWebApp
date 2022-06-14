using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Mini_Library_Project.Models
{
    public class UserCredentials:IdentityUser
    {
        public UserCredentials()
        {
        }
        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        public static implicit operator Task<object>(UserCredentials v)
        {
            throw new NotImplementedException();
        }
    }
}
