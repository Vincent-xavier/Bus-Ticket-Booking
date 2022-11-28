import { useFormik } from "formik";
import * as Yub from "yup";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SideNav from "../../layout/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { addNewBus, getBusById } from "../../../actions/Bus";

const EditBus = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  let { busId } = useParams();
  useEffect(() => {
    dispatch(getBusById(busId));
  }, []);

  // Validation
  const { busEditData } = useSelector((state) => state.BusApi);

  const editBus = useFormik({
    enableReinitialize: true,

    initialValues: {
      busId: busEditData ? busEditData.resultData.busId : "",
      busName: busEditData ? busEditData.resultData.busName : "",
      busType: busEditData ? busEditData.resultData.busType : "",
      facilities: busEditData ? busEditData.resultData.facilities : "",
      totalSeats: busEditData ? busEditData.resultData.totalSeats : "",
      availability: busEditData ? busEditData.resultData.availability : "",
      ratings: busEditData ? busEditData.resultData.ratings : "",
    },

    validationSchema: Yub.object({
      busName: Yub.string().required("Please enter your bus name"),
      busType: Yub.string().required("Please select bus type"),
      facilities: Yub.string().required("add Amenities"),
      totalSeats: Yub.number()
        .min(10, "Must be more than 10 characters")
        .required("This field is requried"),
      availability: Yub.string().required("Please select bus availability"),
      ratings: Yub.string().required("Please enter your ratings"),
    }),
    onSubmit: (values) => {
      const formData = {
        busId: values.busId,
        busName: values.busName,
        busType: values.busType,
        facilities: values.facilities,
        totalSeats: values.totalSeats,
        availability: values.availability,
        ratings: values.ratings,
      };
      dispatch(addNewBus(formData, redirect));

      console.log(formData);
    },
  });
  console.log(editBus.initialValues);

  return (
    <>
      <Header />
      <SideNav />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="card card-warning">
              <div className="card-header">
                <h3 className="card-title">Edit Bus Details</h3>
              </div>
              <div className="card-body">
                <form onSubmit={editBus.handleSubmit}>
                  <input
                    type="hidden"
                    placeholder="bus name"
                    name="busName"
                    value={editBus.values.busId}
                  />
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="form-group">
                        <label>Bus Name</label>
                        <input
                          type="text"
                          placeholder="bus name"
                          name="busName"
                          className={
                            editBus.touched.busName && editBus.errors.busName
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.busName}
                          onBlur={editBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.busName && editBus.errors.busName ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.busName}
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
                            editBus.touched.availability &&
                            editBus.errors.availability
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.availability}
                          onBlur={editBus.handleBlur}
                        >
                          <option disabled>-- select --</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Week Days</option>
                        </select>
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.availability &&
                        editBus.errors.availability ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.availability}
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
                            editBus.touched.busType && editBus.errors.busType
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.busType}
                          onBlur={editBus.handleBlur}
                        >
                          <option disabled>-- select --</option>
                          <option>AC</option>
                          <option>Non AC</option>
                          <option>Sleeper</option>
                        </select>
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.busType && editBus.errors.busType ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.busType}
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
                            editBus.touched.ratings && editBus.errors.ratings
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.ratings}
                          onBlur={editBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.ratings && editBus.errors.ratings ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.ratings}
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
                            editBus.touched.totalSeats &&
                            editBus.errors.totalSeats
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.totalSeats}
                          onBlur={editBus.handleBlur}
                        />
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.totalSeats &&
                        editBus.errors.totalSeats ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.totalSeats}
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
                            editBus.touched.facilities &&
                            editBus.errors.facilities
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          onChange={editBus.handleChange}
                          value={editBus.values.facilities}
                          onBlur={editBus.handleBlur}
                        ></textarea>
                      </div>
                      <div className="row ml-1">
                        {editBus.touched.facilities &&
                        editBus.errors.facilities ? (
                          <p>
                            <span className={"text-danger"}>
                              {editBus.errors.facilities}
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

export default EditBus;
