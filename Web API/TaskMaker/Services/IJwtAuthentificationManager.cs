using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskMaker.Models;

namespace TaskMaker.services
{
    public interface IJwtAuthentificationManager
    {
        string Authenticate(List<User> users, string unsername, string password);
    }
}
