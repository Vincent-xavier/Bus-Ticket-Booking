import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SideNav from "../../layout/SideNav";

const RouteDetails = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row d-flex justify-content-end m-2">
              <Link to="/addbus" className="btn btn-info">
                Add New Route
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RouteDetails;
