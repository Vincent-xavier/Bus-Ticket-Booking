import { useFormik } from "formik";
import * as Yub from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SideNav from "../../layout/SideNav";
import { useDispatch } from "react-redux";
import { addNewBus } from "../../../actions/Bus";

const AddBus = () => {
  const dispatch = useDispatch();

  const redirect = useNavigate();

  const addBus = useFormik({
    enableReintialize: true,
    initialValues: {
      busName: "",
      busType: "",
      facilities: "",
      totalSeats: "",
      availability: "",
      ratings: "",
    },
    validationSchema: Yub.object({
      busName: Yub.string().required("Please enter your bus name"),
      busType: Yub.string().required("Please select bus type"),
      facilities: Yub.string().required("add Amenities"),
      totalSeats: Yub.number().required("This field is requried"),
      availability: Yub.string().required("Please select bus availability"),
      ratings: Yub.string().required("Please enter your ratings"),
    }),
    onSubmit: (values) => {
      const formData = {
        busName: values.busName,
        busType: values.busType,
        facilities: values.facilities,
        totalSeats: values.totalSeats,
        availability: values.availability,
        ratings: values.ratings,
      };
      dispatch(addNewBus(formData, redirect));

      // console.log(formData);
    },
  });

  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="card card-warning">
              <div className="card-header">
                <h3 className="card-title">Add New Bus</h3>
              </div>
              <div className="card-body">
                <form onSubmit={addBus.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Bus Name</label>
                        <input
                          type="text"
                          placeholder="bus name"
                          name="busName"
                          className={
                            addBus.touched.busName && addBus.errors.busName
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.busName}
                          onBlur={addBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.busName && addBus.errors.busName ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.busName}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Available</label>
                        <select
                          name="availability"
                          className={
                            addBus.touched.availability &&
                            addBus.errors.availability
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.availability}
                          onBlur={addBus.handleBlur}
                        >
                          <option disabled>-- select --</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Week Days</option>
                        </select>
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.availability &&
                        addBus.errors.availability ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.availability}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Bus type</label>
                        <select
                          name="busType"
                          className={
                            addBus.touched.busType && addBus.errors.busType
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.busType}
                          onBlur={addBus.handleBlur}
                        >
                          <option disabled>-- select --</option>
                          <option>AC</option>
                          <option>Non AC</option>
                          <option>Sleeper</option>
                        </select>
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.busType && addBus.errors.busType ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.busType}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Ratings</label>
                        <input
                          type="number"
                          name="ratings"
                          className={
                            addBus.touched.ratings && addBus.errors.ratings
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.ratings}
                          onBlur={addBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.ratings && addBus.errors.ratings ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.ratings}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Seats</label>
                        <input
                          type="number"
                          name="totalSeats"
                          placeholder="total seats"
                          className={
                            addBus.touched.totalSeats &&
                            addBus.errors.totalSeats
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.totalSeats}
                          onBlur={addBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.totalSeats &&
                        addBus.errors.totalSeats ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.totalSeats}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-10">
                      <div className="form-group">
                        <label>Amenities</label>
                        <textarea
                          name="facilities"
                          rows="3"
                          placeholder="Enter ..."
                          className={
                            addBus.touched.facilities &&
                            addBus.errors.facilities
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={addBus.handleChange}
                          value={addBus.values.facilities}
                          onBlur={addBus.handleBlur}
                        ></textarea>
                      </div>
                      <div className="row ml-1">
                        {addBus.touched.facilities &&
                        addBus.errors.facilities ? (
                          <p>
                            <span className={"text-danger"}>
                              {addBus.errors.facilities}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-success mr-3">
                        Save
                      </button>
                      <Link to={"/busdetails"}>
                        <button type="submit" className="btn btn-danger">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddBus;
