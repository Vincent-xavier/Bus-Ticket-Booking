import React from "react";
import Header from "../../components/layout/Header";
import SideNav from "../../components/layout/SideNav";
import Footer from "../../components/layout/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <h1>WElcome Home</h1>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
