using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Models.Input
{
   public class Contact
    {
        public int RegisterId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public bool Gender { get; set; }

        public string Email { get; set; }

        public Int64 Phone { get; set; }

        public string Message { get; set; }

        public DateTime CreatedDate { get; set; }
        
    }
}
