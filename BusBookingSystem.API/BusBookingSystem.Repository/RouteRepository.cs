using BusBookingSystem.Common;
using BusBookingSystem.DBEngine;
using BusBookingSystem.Models.Input;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Repository
{
    public interface IRouteRepository
    {
        Task<List<RouteModel>> RouteDetails();
    }
    public class RouteRepository : IRouteRepository
    {

        private readonly ISQLServerHandler _sQLServerHandler;
        public RouteRepository(ISQLServerHandler sQLServerHandler)
        {
            _sQLServerHandler = sQLServerHandler;
        }

        public async Task<List<RouteModel>> RouteDetails()
        {
            return (await _sQLServerHandler.QueryAsync<RouteModel>(_sQLServerHandler.Connection, StoredProc.Routes, CommandType.StoredProcedure, null)).ToList();
        }
    }
}
