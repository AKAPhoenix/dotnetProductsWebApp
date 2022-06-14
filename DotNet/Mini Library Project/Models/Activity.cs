using System;
using System.ComponentModel.DataAnnotations;

namespace Mini_Library_Project.Models
{
    public class Activity
    {
        public int Id { get; set; }
        [Required]
        public UserCredentials user { get; set; }
        public Book book { get; set; }
        public Status status { get; set; }
        public DateTime DateStartedReading { get; set; }
        public DateTime DateEndedReading { get; set; }
    }
}
