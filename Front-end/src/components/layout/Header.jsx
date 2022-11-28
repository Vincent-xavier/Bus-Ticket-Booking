import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  const handleSignout = (event) => {
    localStorage.removeItem("userDetails");
    window.location.href = "/login";
    // navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown user user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="/dist/img/user2-160x160.jpg"
                className="user-image img-circle elevation-2"
                alt="User Image"
              />
              {userInfo && (
                <span className="hidden-xs">
                  {userInfo.firstName + "  " + userInfo.lastName}{" "}
                </span>
              )}
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-primary">
                <img
                  src="/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
                {userInfo && (
                  <h5 className="mt-3">
                    {" "}
                    {userInfo.firstName + "  " + userInfo.lastName}{" "}
                  </h5>
                )}
              </li>
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-right ">
                  <a
                    className="btn btn-default btn-flat"
                    onClick={(e) => handleSignout(e)}
                  >
                    Sign out
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
};

export default Header;
