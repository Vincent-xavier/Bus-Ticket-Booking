import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.LoginApi);
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));
  console.log(userInfo);
  if (isAuthenticated || userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
