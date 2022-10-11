using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Models.Input
{
    public class UserLogin
    {
        public Int32 RegisterId { get; set; } = 0;
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public bool Gender { get; set; } = true;
        public string Mobile { get; set; }
        public string Address { get; set; }
        public Int32 RollId { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}
