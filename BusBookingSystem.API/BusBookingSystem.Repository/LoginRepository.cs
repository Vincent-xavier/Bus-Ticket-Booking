using BusBookingSystem.API.Common;
using BusBookingSystem.Common;
using BusBookingSystem.DBEngine;
using BusBookingSystem.Models.Input;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Repository
{
    public interface ILoginRepository
    {
        Task<UserLogin> UserLogin(string EmailId, string Password);
        Task<UserLogin> CheckEmail(string EmailId);
        Task<int> Register(UserLogin login);
    }
    public class LoginRepository : ILoginRepository
    {
        private readonly ISQLServerHandler _SQLServerHandler;
        public LoginRepository(ISQLServerHandler sQLServerHandler)
        {
            _SQLServerHandler = sQLServerHandler;
        }
        public async Task<UserLogin> UserLogin(string EmailId, string Password)
        {
            UserLogin userLogin = new UserLogin();
            var param = new DynamicParameters();
            try
            {
                param.Add("@EmailId", EmailId, DbType.String, ParameterDirection.Input);
                param.Add("@Password", Password, DbType.String, ParameterDirection.Input);
                userLogin = await _SQLServerHandler.QueryFirstOrDefaultAsync<UserLogin>(_SQLServerHandler.Connection, StoredProc.CheckEmail, CommandType.StoredProcedure, param);
            }
            catch (Exception ex)
            {
                ErrorLog log = new ErrorLog();
                log.SendErrorToText(ex);

            }
            return userLogin;
        }

        public async Task<UserLogin> CheckEmail(string EmailId)
        {
            var param = new DynamicParameters();
            try
            {
                param.Add("@EmailId", EmailId, DbType.String, ParameterDirection.Input);

            }
            catch (Exception ex)
            {
                ErrorLog log = new ErrorLog();
                log.SendErrorToText(ex);

            }
            return await _SQLServerHandler.QueryFirstOrDefaultAsync<UserLogin>(_SQLServerHandler.Connection, StoredProc.CheckEmailExists, CommandType.StoredProcedure, param);
        }


        public async Task<int> Register(UserLogin login)
        {
            var param = new DynamicParameters();

            try
            {
                param.Add("@EmailId", login.EmailId, DbType.String, ParameterDirection.Input);
                param.Add("@FirstName", login.FirstName, DbType.String, ParameterDirection.Input);
                param.Add("@LastName", login.LastName, DbType.String, ParameterDirection.Input);
                param.Add("@Gender", login.Gender, DbType.Boolean, ParameterDirection.Input);
                param.Add("@Mobile", login.Mobile, DbType.String, ParameterDirection.Input);
                param.Add("@Address", login.Address, DbType.String, ParameterDirection.Input);
                param.Add("@Password", login.Password, DbType.String, ParameterDirection.Input);
                param.Add("@Returnval", dbType: DbType.Int32, direction: ParameterDirection.Output);

                await _SQLServerHandler.ExecuteAsync(_SQLServerHandler.Connection, StoredProc.UserRegister, CommandType.StoredProcedure, param);

            }
            catch (Exception ex)
            {

                ErrorLog log = new ErrorLog();
                log.SendErrorToText(ex);
            }
            return param.Get<int>("@Returnval");
        }
    }
}
