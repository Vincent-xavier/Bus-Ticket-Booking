using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusBookingSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusDetailsController : ControllerBase
    {
        private readonly IBusService _busService;
        public BusDetailsController(IBusService busService)
        {
            _busService = busService;
        }

        //Actions
        [HttpGet]
        [ActionName("getbusdetails")]
        [Route("getbusdetails")]
        public async Task<ActionResult> GetBusDetails()
        {
            return Ok(await _busService.GetBusDetails());
        }
        [HttpGet("getbusdetailbyid/{BusId}")]
        public async Task<ActionResult> GetBusDetailById(int BusId)
        {
            return Ok(await _busService.GetBusDetailsById(BusId));
        }

        [HttpDelete("deletebusdetail/{BusId}")]
        public async Task<ActionResult> DeleteBusDetail(int BusId)
        {
            return Ok(await _busService.DeleteBusDetail(BusId));
        }

        [HttpPost]
        [ActionName("Savebusdetail")]
        [Route("Savebusdetail")]
        public async Task<ActionResult> SaveBusDetail(BusDetails objbusDetails)
        {
            return Ok(await _busService.SaveBusDetails(objbusDetails));
        }

    }
}