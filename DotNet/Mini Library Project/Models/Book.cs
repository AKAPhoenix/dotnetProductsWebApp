using System;

namespace Mini_Library_Project.Models
{
    public class Book
    {
        public Author Author { get; set; }
        public string Title { get; set; }
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
