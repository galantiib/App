using System.Diagnostics.CodeAnalysis;

namespace CRUDApi_DotNet8.Entities
{
    public class Task
    {
        public int ID { get; set; }  
        public string Title { get; set; }
        public string Subject { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string AssignedTo { get; set; }

    }
}
