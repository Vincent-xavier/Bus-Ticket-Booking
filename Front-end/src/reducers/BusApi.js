import * as constants from "../actions/types";

const initialState = {
  isLoading: false,
  error: "",
  success: "",
  busData: null,
  busEditData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.BUSDETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        busData: null,
      };
    case constants.BUSDETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "success",
        busData: action.payload,
      };
    case constants.BUSDETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "error",
        busData: null,
      };

    case constants.BUS_GETBYID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        busData: null,
        busEditData: null,
      };
    case constants.BUS_GETBYID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        busEditData: action.payload,
        success: "success",
      };
    case constants.BUS_GETBYID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "error",
        busData: null,
      };

    case constants.ADD_NEW_BUS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        busData: null,
        busEditData: null,
      };
    case constants.ADD_NEW_BUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Bus Added Success",
      };
    case constants.ADD_NEW_BUS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "Bus Added error",
        busData: null,
      };

    case constants.BUS_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        busData: null,
      };
    case constants.BUS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Deleted successfully",
      };
    case constants.BUS_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "error",
        busData: null,
      };
    default:
      return state;
  }
}
