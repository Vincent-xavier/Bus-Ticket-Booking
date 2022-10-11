using BusBookingSystem.Models.Input;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Models.Output
{
    public class RoutesResult
    {
        public List<RouteModel> ListRoutes { get; set; }
        public List<CityModel> ListCity { get; set; }

    }
}
