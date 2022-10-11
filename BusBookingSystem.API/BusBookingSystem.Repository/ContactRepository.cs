using BusBookingSystem.Common;
using BusBookingSystem.DBEngine;
using BusBookingSystem.Models.Input;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Repository
{
    public interface IContactRepository
    {
        Task<List<Contact>> GetResponsess();
        Task<Contact> GetResponsessById(int Id);
        Task<int> DeleteResponse(int Id);
        Task<int> SaveResponse(Contact objContact);
    }

    public class ContactRepository : IContactRepository
    {
        private readonly ISQLServerHandler _sQLServerHandler;

        public ContactRepository(ISQLServerHandler sQLServerHandler)
        {
            _sQLServerHandler = sQLServerHandler;
        }

        public async Task<List<Contact>> GetResponsess()
        {

            return (await _sQLServerHandler.QueryAsync<Contact>(_sQLServerHandler.Connection, StoredProc.GetRespon, CommandType.StoredProcedure, null)).ToList();

        }

        public async Task<Contact> GetResponsessById(int Id)
        {
            var param = new DynamicParameters();

            param.Add("@Id", Id, DbType.Int32, ParameterDirection.Input);

            return (await _sQLServerHandler.QueryFirstOrDefaultAsync<Contact>(_sQLServerHandler.Connection, StoredProc.GetResponById, CommandType.StoredProcedure, param));

        }

        public async Task<int> SaveResponse(Contact objContact)
        {
            var param = new DynamicParameters();

            param.Add("@RegisterId", objContact.RegisterId, DbType.Int32, ParameterDirection.Input);
            param.Add("@FirstName", objContact.FirstName, DbType.String, ParameterDirection.Input);
            param.Add("@LastName", objContact.LastName, DbType.String, ParameterDirection.Input);
            param.Add("@Gender", objContact.Gender, DbType.Boolean, ParameterDirection.Input);
            param.Add("@Email", objContact.Email, DbType.String, ParameterDirection.Input);
            param.Add("@Phone", objContact.Phone, DbType.Int64, ParameterDirection.Input);
            param.Add("@Message", objContact.Message, DbType.String, ParameterDirection.Input);
            //param.Add("@CreatedDate", objContact.CreatedDate, DbType.Date, ParameterDirection.Input);
            param.Add("@Returnval", dbType: DbType.Int32, direction: ParameterDirection.Output);

            await _sQLServerHandler.ExecuteAsync(_sQLServerHandler.Connection, StoredProc.SaveRespon, CommandType.StoredProcedure, param);
            return param.Get<int>("@Returnval");
        }
        public async Task<int> DeleteResponse(int Id)
        {
            var param = new DynamicParameters();
            param.Add("@Id", Id, DbType.Int32, ParameterDirection.Input);
            param.Add("@Returnval", dbType: DbType.Int32, direction: ParameterDirection.Output);
            await _sQLServerHandler.ExecuteAsync(_sQLServerHandler.Connection, StoredProc.DeleteRespon, CommandType.StoredProcedure, param);
            return param.Get<int>("@Returnval");
        }

    }
}
