import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yub from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/Login";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passType, setpassType] = useState("password");
  const [passIcon, setpassIcon] = useState("fas fa-lock");

  const { error, userData, success } = useSelector((state) => state.LoginApi);

  const lcStorage = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    console.log(userData);
    if (userData || lcStorage) {
      navigate("/dashboard");
    }
  }, [lcStorage, userData]);

  useEffect(
    () => {
      if (error == "login error") {
        swal({
          title: "Login",
          text: "Invalid username or password",
          icon: "error",
        });
      }
      if (success === "register success") {
        swal("Register Success");
      }
    },
    [error],
    success
  );

  const showPassword = () => {
    if (passType === "password") {
      setpassType("text");
      setpassIcon("fas fa-unlock");
    } else {
      setpassType("password");
      setpassIcon("fas fa-lock");
    }
  };

  const loginForm = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema: Yub.object({
      password: Yub.string().required("Please enter your password"),
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
        emailId: values.emailId,
        password: values.password,
      };
      dispatch(userLogin(formData));
    },
  });
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card">
          <div className="card-body login-card-body ">
            <p className="login-box-msg">Sign in to pick your bus</p>
            <form onSubmit={loginForm.handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="email"
                  name="emailId"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.emailId}
                  onBlur={loginForm.handleBlur}
                  className={
                    loginForm.touched.emailId && loginForm.errors.emailId
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
              <div className="row ml-1">
                {loginForm.touched.emailId && loginForm.errors.emailId ? (
                  <p>
                    <span className={"text-danger"}>
                      {loginForm.errors.emailId}
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
                    loginForm.touched.password && loginForm.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  onBlur={loginForm.handleBlur}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <a className={passIcon} onClick={() => showPassword()} />
                  </div>
                </div>
              </div>
              <div className="row ml-1">
                {loginForm.touched.password && loginForm.errors.password ? (
                  <p>
                    <span className={"text-danger"}>
                      {loginForm.errors.password}
                    </span>
                  </p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" className="ml-1" id="remember" />
                    <label className="form-check-label ml-1" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Sign in
                </button>
              </div>
            </form>
            <p className="mb-1">
              <a>I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link
                to={"/register"}
                href="register.html"
                className="text-center"
              >
                Register a new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
