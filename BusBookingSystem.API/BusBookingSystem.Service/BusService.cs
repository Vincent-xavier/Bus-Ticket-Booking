using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BusBookingSystem.Models;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Repository;

namespace BusBookingSystem.Service
{
    public interface IBusService
    {
        Task<ResultArgs> GetBusDetails();
        Task<ResultArgs> GetBusDetailsById(int BusId);
        Task<ResultArgs> DeleteBusDetail(int BusId);
        Task<ResultArgs> SaveBusDetails(BusDetails busDetails);
    }

    public class BusService : IBusService
    {
        private readonly IBusRepository _busRepository;
        public BusService(IBusRepository busRepository)
        {
            _busRepository = busRepository;
        }

        public async Task<ResultArgs> GetBusDetails()
        {
            var ResultArgs = new ResultArgs();
            var BusDetailsResult = await _busRepository.GetBusDetails();


            if (BusDetailsResult != null)
            {
                ResultArgs.StatusCode = 200;
                ResultArgs.StatusMessage = "Record is success";
                ResultArgs.ResultData = BusDetailsResult;
            }
            else
            {
                ResultArgs.StatusCode = 205;
                ResultArgs.StatusMessage = "Something Went Wroung";
            }
            return ResultArgs;
        }


        public async Task<ResultArgs> GetBusDetailsById(int BusId)
        {
            var ResultArgs = new ResultArgs();
            var BusDetailsResult = await _busRepository.GetBusDetailsById(Convert.ToInt32(BusId));
            if (BusDetailsResult != null)
            {
                ResultArgs.StatusCode = 200;
                ResultArgs.StatusMessage = "Record is success";
                ResultArgs.ResultData = BusDetailsResult;
            }
            else
            {
                ResultArgs.StatusCode = 205;
                ResultArgs.StatusMessage = "Something Went Wroung";
            }
            return ResultArgs;

        }

        public async Task<ResultArgs> DeleteBusDetail(int BusId)
        {
            var ResultArgs = new ResultArgs();
            var busid = await _busRepository.DeleteBusDetail(Convert.ToInt32(BusId));

            if (busid > 0)
            {
                ResultArgs.StatusCode = 200;
                ResultArgs.StatusMessage = "Deleted Successfully";
            }
            else
            {
                ResultArgs.StatusCode = 201;
                ResultArgs.StatusMessage = "Failed to Delete";
            }
            return ResultArgs;
        }


        public async Task<ResultArgs> SaveBusDetails(BusDetails busDetails)
        {
            var Result = new ResultArgs();
            var busId = await _busRepository.SaveBusDetails(busDetails);

            if (busId > 0)
            {
                Result.StatusCode = 200;
                Result.StatusMessage = "Save success";
            }
            else
            {
                Result.StatusCode = 201;
                Result.StatusMessage = "Failed to save";
            }
            return Result;
        }

    }
}
