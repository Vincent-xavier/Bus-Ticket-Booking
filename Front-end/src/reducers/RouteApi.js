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
    case constants.ROUTE_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        busData: null,
      };
    case constants.ROUTE_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "success",
        busData: action.payload,
      };
    case constants.ROUTE_DETAILS_ERROR:
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
