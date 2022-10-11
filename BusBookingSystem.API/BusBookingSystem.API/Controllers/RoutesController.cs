using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusBookingSystem.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusBookingSystem.API.Controllers
{
    [Route("api/Routes")]
    [ApiController]
    public class RoutesController : ControllerBase
    {
        private readonly IRouteService _routeService;

        public RoutesController(IRouteService routeService)
        {
            _routeService = routeService;
        }


        [HttpGet]
        [ActionName("routedetails")]
        [Route("routedetails")]
        public async Task<ActionResult> RouteDetails()
        {
            return Ok(await _routeService.RouteDetails());
        }
    }
}