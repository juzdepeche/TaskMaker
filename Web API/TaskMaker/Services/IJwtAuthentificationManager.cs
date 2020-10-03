using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskMaker
{
    public interface IJwtAuthentificationManager
    {
        string Authenticate(string unsername, string password);
    }
}
