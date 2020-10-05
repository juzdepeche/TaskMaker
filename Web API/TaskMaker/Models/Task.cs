using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskMaker.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public Task()
        {

        }

        public Task(int id, string title, string description)
        {
            Id = id;
            Title = title;
            Description = description;
        }

    }
}
