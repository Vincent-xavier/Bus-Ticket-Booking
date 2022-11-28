import axios from "axios";
import * as constants from "./types";

export const routeDetails = () => async (dispatch) => {
  dispatch({
    type: constants.ROUTE_DETAILS_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .get(`/api/Routes/routedetails`, {}, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.ROUTE_DETAILS_SUCCESS,
          payload: res.data,
        });
      });
  } catch (err) {
    dispatch({
      type: constants.ROUTE_DETAILS_ERROR,
    });
  }
};
