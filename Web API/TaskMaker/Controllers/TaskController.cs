using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskMaker.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        // todo: define tasks in db
        private List<Task> tasks = new List<Task>
        {
            new Task(1, "Typescript", "Convert Javascript files to Typescript"),
            new Task(2, "Unit Tests", "Add unit tests using Jest"),
            new Task(2, "Prettier", "Setup .prettierrc")
        };

        [HttpGet]
        public IEnumerable<Task> Get()
        {
            return tasks;
        }

        [HttpPost]
        public ActionResult<List<Task>> Create([FromBody] Task task)
        {
            Random rnd = new Random();
            try
            {
                if (task == null)
                {
                    return BadRequest();
                }

                //todo: add to db
                tasks.Add(new Task(rnd.Next(5, 100), task.Title, task.Description));
                return tasks;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
            }
        }

        [HttpPut("{id}")]
        public ActionResult<List<Task>> Update(int id, [FromBody] Task task)
        {
            try
            {
                if (id != task.Id)
                {
                    return BadRequest("Task Id mismatch");
                }

                var taskToUpdate = tasks.First(t => t.Id == id);
                //todo: update db
                tasks.Where(t => t.Id == id).ToList().ForEach(t => { t.Title = task.Title; t.Description = task.Description; });
                return tasks;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
            }
        }
    }
}
