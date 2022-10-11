using BusBookingSystem.Models;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Service
{
    public interface ILoginService
    {
        Task<ResultArgs> UserLogin(string EmailId, string Password);

        Task<ResultArgs> Register(UserLogin userLogin);
    }
    public class LoginService : ILoginService
    {

        private readonly ILoginRepository _LoginRepository;

        public LoginService(ILoginRepository loginRepository)
        {
            _LoginRepository = loginRepository;
        }

        public async Task<ResultArgs> UserLogin(string EmailId, string Password)
        {
            var Result = new ResultArgs();
            var userResult = await _LoginRepository.UserLogin(EmailId,Password);
            if (userResult != null)
            {
                Result.StatusCode = 200;
                Result.StatusMessage = "Login success";
                Result.ResultData = userResult;
                return Result;
            }

            return Result;
        }

        public async Task<ResultArgs> Register(UserLogin userLogin)
        {
            var Result = new ResultArgs();
            var Success = await _LoginRepository.Register(userLogin);

            if (Success > 0)
            {
                Result.StatusCode = 200;
                Result.StatusMessage = "Register Successfully";
                return Result;
            }

            return Result;
        }
    }
}
