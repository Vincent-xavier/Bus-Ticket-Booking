import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.userAPI);
  const lcStorage = localStorage.getItem("isAuthenticated");
  if (isAuthenticated || lcStorage) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
