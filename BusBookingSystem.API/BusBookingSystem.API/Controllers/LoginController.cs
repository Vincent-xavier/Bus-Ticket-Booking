using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusBookingSystem.DBEngine;
using BusBookingSystem.Models;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Repository;
using BusBookingSystem.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusBookingSystem.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _LoginService;
        private readonly ILoginRepository _LoginRepository;


        public LoginController(ILoginService loginService, ILoginRepository loginRepository)
        {
            _LoginService = loginService;
            _LoginRepository = loginRepository;
        }

        [HttpPost]
        [ActionName("userLogin")]
        [Route("userLogin")]
        public async Task<IActionResult> UserLogin(UserLogin userLogin)
        {
            var UserExist = await _LoginService.UserLogin(userLogin.EmailId, userLogin.Password);

            if (UserExist.ResultData != null)
            {
                return Ok(UserExist);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, new { status = "error", message = "check your Email && password" });

        }
        [HttpPost]
        [ActionName("register")]
        [Route("register")]
        public async Task<IActionResult> Register(UserLogin userLogin)
        {
            var EmailExist = await _LoginRepository.CheckEmail(userLogin.EmailId);

            if (EmailExist != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { status = "error", message = "email already exists" });
            }

            var Result = await _LoginService.Register(userLogin);

            if (Result.StatusCode == 200)
            {
                return Ok(new ResultArgs { StatusCode = 200, StatusMessage = "Register Successfully" });

            }
            return BadRequest(new ResultArgs { StatusCode = 400, StatusMessage = "Something Went Wroung" });
        }
    }
}