using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Models.Input
{
    public class BusDetails
    {
        public int BusId { get; set; }
        public string BusName { get; set; }
        public string BusType { get; set; }
        public int TotalSeats { get; set; }
        public string Facilities { get; set; }
        public float Ratings { get; set; }
        public string Availability { get; set; }
    }
    public class CityModel
    {
        public int CityId { get; set; }
        public string CityName { get; set; }
    }
}
