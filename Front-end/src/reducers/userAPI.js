import * as constants from "../actions/types";

const initialState = {
  isLoading: false,
  error: "",
  success: "",
  userData: null,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        isAuthenticated: false
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "login success",
        userData: action.payload,
        isAuthenticated: true
      };
    case constants.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: "login error",
        isAuthenticated: false
      };
    default:
      return state;
  }
}