using System;
using System.Collections.Generic;
using System.Text;

namespace BusBookingSystem.Common
{
    class Constants
    {
        
    }
    public class StoredProc
    {
        /// <summary>
        /// Login and Register Model
        /// </summary>
        public const string UserLogin = "usp_Login_ValidateUser";
        public const string CheckEmail = "usp_Login_CheckUser";
        public const string CheckEmailExists = "usp_Login_CheckEmailExists";
        public const string UserRegister = "usp_Login_Register";
        


        /// <summary>
        /// Bus Model
        /// </summary>
        public const string BusDetails = "spGetBusDetails";
        public const string DeleteBus = "spDeleteBus";
        public const string SaveBusDetails = "spSaveBusDetails";
        public const string GetBusDetailsById = "spGetBusDetailsById";


        /// <summary>
        /// Route Model
        /// </summary>

        public const string Routes = "usp_Route_GetRoutes";

        // Contact Us
        public const string GetRespon ="usp_GetResponses";
        public const string GetResponById ="usp_GetResponsesById";
        public const string SaveRespon = "usp_SaveResponse";
        public const string UpdateRespon = "usp_UpdateResponse";
        public const string DeleteRespon = "usp_DeleteResponse";

        
      
    }
}
