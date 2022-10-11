using BusBookingSystem.Models;
using BusBookingSystem.Models.Input;
using BusBookingSystem.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusBookingSystem.Service
{
    public interface IContactService
    {
        Task<ResultArgs> GetResponses();
        Task<ResultArgs> GetResponsesById(int Id);
        Task<ResultArgs> DeleteResponses(int Id);
        Task<ResultArgs> SaveResponse(Contact objContact);

    }
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }


        public async Task<ResultArgs> GetResponses()
        {
            var result = new ResultArgs();

            var ListResponses = await _contactRepository.GetResponsess();

            if (ListResponses != null)
            {
                result.StatusMessage = "Record is success";
                result.StatusCode = 200;
                result.ResultData = ListResponses;
            }
            else
            {
                result.StatusCode = 205;
                result.StatusMessage = "Something Went Wroung";
            }
            return result;
        }
        public async Task<ResultArgs> GetResponsesById(int Id)
        {
            var result = new ResultArgs();

            var ListResponses = await _contactRepository.GetResponsessById(Convert.ToInt32(Id));

            if (ListResponses != null)
            {
                result.StatusMessage = "Record is success";
                result.StatusCode = 200;
                result.ResultData = ListResponses;
            }
            else
            {
                result.StatusCode = 205;
                result.StatusMessage = "Something Went Wroung";
            }
            return result;
        }


        public async Task<ResultArgs> SaveResponse(Contact objContact)
        {
            var Result = new ResultArgs();
            var Id = await _contactRepository.SaveResponse(objContact);

            if (Id == 1)
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
        public async Task<ResultArgs> DeleteResponses(int Id)
        {
            var result = new ResultArgs();
            var DelId = await _contactRepository.DeleteResponse(Convert.ToInt32(Id));

            if (DelId == 1)
            {
                result.StatusCode = 200;
                result.StatusMessage = "Deleted successfully";
            }
            else
            {
                result.StatusCode = 201;
                result.StatusMessage = "Something went wroung";
            }
            return result;
        }
    }
}
