import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../actions/User";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lcStorage = localStorage.getItem("isAuthenticated");
  console.log(lcStorage);
  const { userData, isLoading, success, error } = useSelector(
    (state) => state.userAPI
  );
  useEffect(() => {
    console.log(error);

    if (error == "login error") {
      swal({
        title: "Login",
        text: "Invalid username or password",
        icon: "error",
      });
      console.log("IN");
    }
  }, [error]);

  const loginForm = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailId: Yup.string().required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      const formData = {
        emailId: values.emailId,
        password: values.password,
      };
      // console.log(formData);
      dispatch(userLogin(formData));
    },
  });

  useEffect(() => {
    if (userData?.data?.id || lcStorage) {
      navigate("/dashboard");
    }
  }, [userData]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <br></br>
              <br></br>

              <form id="loginform" onSubmit={loginForm.handleSubmit}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="emailId"
                    className="form-control"
                    id="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.p_name}
                    onBlur={loginForm.handleBlur}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {loginForm.touched.email && loginForm.errors.email
                      ? loginForm.errors.email
                      : null}
                  </small>
                </div>
                <br></br>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.p_name}
                    onBlur={loginForm.handleBlur}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {loginForm.touched.password && loginForm.errors.password
                      ? loginForm.errors.password
                      : null}
                  </small>
                </div>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">
                  <i class="fa fa-sign-in"></i>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
