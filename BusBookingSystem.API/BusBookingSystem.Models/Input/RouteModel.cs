using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Models.Input
{
   public class RouteModel
    {
        public int RouteId { get; set; }
        public int SourceId { get; set; }
        public string From { get; set; }
        public string TO { get; set; }

        public int DestinationId { get; set; }
        public string DepartureStartTime { get; set; }
        public string DepartureEndTime { get; set; }
        public string JourneyHours { get; set; }
        public decimal Fare { get; set; }
        public int BusId { get; set; }

        public string BusName { get; set; }
    }
}
