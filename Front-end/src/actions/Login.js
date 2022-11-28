import axios from "axios";
import * as constants from "./types";

export const userLogin = (data) => async (dispatch) => {
  dispatch({
    type: constants.LOGIN_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .post(`/api/login/userLogin`, data, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.LOGIN_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem(
          "userDetails",
          JSON.stringify(res.data.resultData)
        );
      });
  } catch (err) {
    dispatch({
      type: constants.LOGIN_ERROR,
    });
  }
};

export const userRegister = (data, redirect) => async (dispatch) => {
  dispatch({
    type: constants.REGISTER_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .post(`/api/login/register`, data, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.REGISTER_SUCCESS,
        });
        redirect("/login");
      });
  } catch (err) {
    dispatch({
      type: constants.REGISTER_ERROR,
    });
  }
};
