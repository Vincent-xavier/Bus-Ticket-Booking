import axios from "axios";
import * as constants from "./types";

export const busDetails = () => async (dispatch) => {
  dispatch({
    type: constants.BUSDETAILS_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .get(`/api/BusDetails/getbusdetails`, {}, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.BUSDETAILS_SUCCESS,
          payload: res.data,
        });
      });
  } catch (err) {
    dispatch({
      type: constants.BUSDETAILS_ERROR,
    });
  }
};
export const getBusById = (id) => async (dispatch) => {
  dispatch({
    type: constants.BUS_GETBYID_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .get(`/api/BusDetails/getbusdetailbyid/${id}`, {}, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.BUS_GETBYID_SUCCESS,
          payload: res.data,
        });
      });
  } catch (err) {
    dispatch({
      type: constants.BUS_GETBYID_ERROR,
    });
  }
};
export const addNewBus = (busData, redirect) => async (dispatch) => {
  dispatch({
    type: constants.ADD_NEW_BUS_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .post(`/api/BusDetails/Savebusdetail`, busData, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.ADD_NEW_BUS_SUCCESS,
          payload: res.data,
        });
        redirect("/busdetails");
      });
  } catch (err) {
    dispatch({
      type: constants.ADD_NEW_BUS_ERROR,
    });
  }
};

export const deleteBus = (id) => async (dispatch) => {
  dispatch({
    type: constants.BUS_DELETE_REQUEST,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    await axios
      .delete(`/api/BusDetails/deletebusdetail/${id}`, {}, { headers: headers })
      .then((res) => {
        dispatch({
          type: constants.BUS_DELETE_SUCCESS,
          payload: res.data,
        });
      });
  } catch (err) {
    dispatch({
      type: constants.BUS_DELETE_ERROR,
    });
  }
};
