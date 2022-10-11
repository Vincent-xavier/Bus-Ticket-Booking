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
    [Route("api/contact")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactUsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        [ActionName("getresponse")]
        [Route("getresponse")]
        public async Task<IActionResult> Responses()
        {
            return Ok(await _contactService.GetResponses());
        }

        [HttpDelete("getresponsebyid/{Id}")]
        //[ActionName("getresponsebyid")]
        //[Route("getresponsebyid")]
        public async Task<IActionResult> ResponsesById(int Id)
        {
            return Ok(await _contactService.GetResponsesById(Id));
        }


        [HttpPost]
        [ActionName("saveresponse")]
        [Route("saveresponse")]
        public async Task<IActionResult> SaveResponse(Contact objContact)
        {
            return Ok(await _contactService.SaveResponse(objContact));
        }
        

        [HttpDelete("deleteresponse/{Id}")]
        //[ActionName("deleteresponse")]
        //[Route("deleteresponse")]
        public async Task<IActionResult> DeleteResponses(int Id)
        {
            return Ok(await _contactService.DeleteResponses(Id));
        }
    }
}