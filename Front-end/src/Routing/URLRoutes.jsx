import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import AddBus from "../components/pages/Bus/AddBus";
import BusDetails from "../components/pages/Bus/BusDetails";
import EditBus from "../components/pages/Bus/EditBus";
import Dashboard from "../components/pages/Dashboard";
import RouteDetails from "../components/pages/Route/RouteDetails";
import PrivateRoute from "./privateRoutes/privateRoutes";

function URLRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/busdetails" element={<BusDetails />}></Route>
          <Route path="/addbus" element={<AddBus />}></Route>
          <Route path="/editbus/:busId" element={<EditBus />}></Route>
          <Route path="/route" element={<RouteDetails />}></Route>
        </Routes>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default URLRoutes;
