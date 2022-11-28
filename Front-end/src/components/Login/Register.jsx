import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import * as Yub from "yup";
import { userRegister } from "../../actions/Login";

const Register = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.LoginApi);

  const [passType, setpassType] = useState("password");
  const [passIcon, setpassIcon] = useState("fas fa-lock");

  useEffect(() => {
    if (error === "register error") {
      swal("email already exist choose different email");
    }
  }, [error]);
  const registerForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      gender: "",
      mobile: "",
      address: "",
    },
    validationSchema: Yub.object({
      firstName: Yub.string().required("Please enter your first name"),
      lastName: Yub.string().required("Please enter your last name"),
      password: Yub.string().required("Please enter your password"),
      gender: Yub.string().required("Please Choose your gender"),
      mobile: Yub.string().required("Please enter your mobile"),
      address: Yub.string().required("Please enter your address"),
    }),

    validate: (values) => {
      let errors = {};
      if (!values.emailId) {
        errors.emailId = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)
      ) {
        errors.emailId = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      const formData = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailId: values.emailId,
        password: values.password,
        gender: values.gender === "male" ? true : false,
        mobile: values.mobile,
        address: values.address,
      };
      dispatch(userRegister(formData, redirect));
      // console.log(formData);
    },
  });

  const showPassword = () => {
    if (passType === "password") {
      setpassType("text");
      setpassIcon("fas fa-unlock");
    } else {
      setpassType("password");
      setpassIcon("fas fa-lock");
    }
  };

  return (
    <div className="hold-transition register-page">
      <div className="register-box" style={{ width: "450px" }}>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={registerForm.handleSubmit}>
              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    type="text"
                    placeholder="first Name"
                    name="firstName"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.firstName}
                    onBlur={registerForm.handleBlur}
                    className={
                      registerForm.touched.firstName &&
                      registerForm.errors.firstName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <div className="row mt-1 ml-1">
                    {registerForm.touched.firstName &&
                    registerForm.errors.firstName ? (
                      <p>
                        <span className={"text-danger"}>
                          {registerForm.errors.firstName}
                        </span>
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="text"
                    placeholder="last Name"
                    name="lastName"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.lastName}
                    onBlur={registerForm.handleBlur}
                    className={
                      registerForm.touched.lastName &&
                      registerForm.errors.lastName
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <div className="row mt-1 ml-1">
                    {registerForm.touched.lastName &&
                    registerForm.errors.lastName ? (
                      <p>
                        <span className={"text-danger"}>
                          {registerForm.errors.lastName}
                        </span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="email"
                  name="emailId"
                  onChange={registerForm.handleChange}
                  value={registerForm.values.emailId}
                  onBlur={registerForm.handleBlur}
                  className={
                    registerForm.touched.emailId && registerForm.errors.emailId
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="row mt-1 ml-1">
                {registerForm.touched.emailId && registerForm.errors.emailId ? (
                  <p>
                    <span className={"text-danger"}>
                      {registerForm.errors.emailId}
                    </span>
                  </p>
                ) : null}
              </div>

              <div className="input-group mb-3">
                <input
                  id="password"
                  name="password"
                  placeholder="password"
                  type={passType}
                  className={
                    registerForm.touched.password &&
                    registerForm.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={registerForm.handleChange}
                  value={registerForm.values.password}
                  onBlur={registerForm.handleBlur}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <a className={passIcon} onClick={() => showPassword()} />
                  </div>
                </div>
              </div>
              <div className="row mt-1 ml-1">
                {registerForm.touched.password &&
                registerForm.errors.password ? (
                  <p>
                    <span className={"text-danger"}>
                      {registerForm.errors.password}
                    </span>
                  </p>
                ) : null}
              </div>

              <div className="form-group row">
                <div className="col-2"></div>
                <div className="col-4">
                  <input
                    type="radio"
                    name="gender"
                    id="Male"
                    onChange={registerForm.handleChange}
                    value="male"
                  />
                  Male
                </div>
                <div className="col-6">
                  <input
                    type="radio"
                    name="gender"
                    id="fMale"
                    onChange={registerForm.handleChange}
                    // value={registerForm.values.gender}
                    value="female"
                  />
                  Female
                </div>
              </div>

              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    type="tel"
                    placeholder="phone"
                    name="mobile"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.mobile}
                    onBlur={registerForm.handleBlur}
                    className={
                      registerForm.touched.mobile && registerForm.errors.mobile
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <div className="row mt-1 ml-1">
                    {registerForm.touched.mobile &&
                    registerForm.errors.mobile ? (
                      <p>
                        <span className={"text-danger"}>
                          {registerForm.errors.mobile}
                        </span>
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="text"
                    placeholder="address"
                    name="address"
                    onChange={registerForm.handleChange}
                    value={registerForm.values.address}
                    onBlur={registerForm.handleBlur}
                    className={
                      registerForm.touched.address &&
                      registerForm.errors.address
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <div className="row mt-1 ml-1">
                    {registerForm.touched.address &&
                    registerForm.errors.address ? (
                      <p>
                        <span className={"text-danger"}>
                          {registerForm.errors.address}
                        </span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center">
                <button type="submit" className="btn btn-block btn-primary">
                  Sign up
                </button>
              </div>
            </form>
            <Link to={"/login"} className="text-center ms-2">
              I already have a account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
