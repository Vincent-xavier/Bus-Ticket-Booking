using BusBookingSystem.Common;
using BusBookingSystem.DBEngine;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Models.Output;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Repository
{
    public interface IBusRepository
    {
        Task<List<BusDetails>> GetBusDetails();
        Task<BusDetails> GetBusDetailsById(int BusId);
        Task<int> DeleteBusDetail(int BusId);

        Task<int> SaveBusDetails(BusDetails busDetails);


    }
    public class BusRepository : IBusRepository
    {
        private readonly ISQLServerHandler _iSQLServerHandler;
        public BusRepository(ISQLServerHandler sQLServerHandler)
        {
            _iSQLServerHandler = sQLServerHandler;
        }

        public async Task<List<BusDetails>> GetBusDetails()
        {
            return (await _iSQLServerHandler.QueryAsync<BusDetails>(_iSQLServerHandler.Connection, StoredProc.BusDetails, CommandType.StoredProcedure, null)).ToList();
        }
        public async Task<BusDetails> GetBusDetailsById(int BusId)
        {
            var parameters = new DynamicParameters();

            parameters.Add("@BusId", BusId, DbType.Int32, ParameterDirection.Input);
            return await _iSQLServerHandler.QueryFirstOrDefaultAsync<BusDetails>(_iSQLServerHandler.Connection, StoredProc.GetBusDetailsById, CommandType.StoredProcedure, parameters);

        }

        public async Task<int> DeleteBusDetail(int BusId)
        {
            var parameters = new DynamicParameters();

            parameters.Add("@BusId", BusId, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@ReturnVal", DbType.Int32, direction: ParameterDirection.Output);
            await _iSQLServerHandler.ExecuteAsync(_iSQLServerHandler.Connection, StoredProc.DeleteBus, CommandType.StoredProcedure, parameters);
            return parameters.Get<int>("@ReturnVal");
        }

        public async Task<int> SaveBusDetails(BusDetails busDetails)
        {
            var param = new DynamicParameters();
            param.Add("@BusId", busDetails.BusId, DbType.Int32, ParameterDirection.Input);
            param.Add("@BusName", busDetails.BusName, DbType.String, ParameterDirection.Input);
            param.Add("@BusType", busDetails.BusType, DbType.String, ParameterDirection.Input);
            param.Add("@TotalSeats", busDetails.TotalSeats, DbType.Int32, ParameterDirection.Input);
            param.Add("@Facilities", busDetails.Facilities, DbType.String, ParameterDirection.Input);
            param.Add("@Ratings", busDetails.Ratings, DbType.Decimal, ParameterDirection.Input);
            param.Add("@Availability", busDetails.Availability, DbType.String, ParameterDirection.Input);
            param.Add("@ReturnVal", dbType: DbType.Int32, direction: ParameterDirection.Output);
            await _iSQLServerHandler.ExecuteAsync(_iSQLServerHandler.Connection, StoredProc.SaveBusDetails, CommandType.StoredProcedure, param);
            return param.Get<int>("@ReturnVal");
        }


        //public async Task<BusDetailsResult> GetCityDetails()
        //{
        //    BusDetailsResult objbus = new BusDetailsResult();

        //    using (_iSQLServerHandler.Connection)
        //    {
        //        var MultipleResult = await _iSQLServerHandler.QueryMultipleAsync(_iSQLServerHandler.Connection, StoredProc.RouteAndCity, CommandType.StoredProcedure, null);

        //        if (MultipleResult != null)
        //        {
        //            objbus.ListCity = (await MultipleResult.ReadAsync<CityModel>()).ToList();
        //            objbus.ListRoute = (await MultipleResult.ReadAsync<RouteDetail>()).ToList();
                    
        //        }
        //    }

        //    return objbus;
        //}
    }
}
