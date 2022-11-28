import { combineReducers } from "redux";
import BusApi from "./BusApi";
import LoginApi from "./LoginApi";

export default combineReducers({
  LoginApi,
  BusApi,
});
