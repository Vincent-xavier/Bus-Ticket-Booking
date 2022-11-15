import axios from "axios";
import * as constants from "./types";

export const userLogin = (ldata) => async (dispatch) => {
  dispatch({
    type: constants.LOGIN_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .post(`/api/login/userLogin`, ldata, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.LOGIN_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("isAuthenticated", 1);
      });
  } catch (err) {
    dispatch({
      type: constants.LOGIN_ERROR,
    });
  }
};
