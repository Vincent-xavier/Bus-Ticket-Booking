using BusBookingSystem.Models;
using BusBookingSystem.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Service
{
    public interface IRouteService
    {
        Task<ResultArgs> RouteDetails();
    }
   public class RouteService : IRouteService
    {
        private readonly IRouteRepository _routeRepository;

        public RouteService(IRouteRepository routeRepository)
        {
            _routeRepository = routeRepository;
        }


        public async Task<ResultArgs> RouteDetails()
        {
            var ResultArgs = new ResultArgs();
            var routes = await _routeRepository.RouteDetails();


            if (routes != null)
            {
                ResultArgs.StatusCode = 200;
                ResultArgs.StatusMessage = "Record is success";
                ResultArgs.ResultData = routes;
            }
            else
            {
                ResultArgs.StatusCode = 205;
                ResultArgs.StatusMessage = "Something Went Wroung";
            }
            return ResultArgs;
        }


    }
}
