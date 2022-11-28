import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/dashboard" className="brand-link">
          <img
            src="/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Mr. Travel</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-4 pb-2 mb-2 d-flex">
            <div className="image">
              <img
                src="/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              {userInfo && (
                <h5 className="text-white">
                  {userInfo.firstName + "  " + userInfo.lastName}{" "}
                </h5>
              )}
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-header">Bus Details</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-bus" />
                  <p>
                    Manage Bus
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/busdetails" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Bus</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/addbus" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add New Bus</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-header">Manage Route</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-road" />
                  <p>
                    Manage Route
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to={"/route"} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Routes</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Route</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">BOOKING REPORT</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Bookings
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
