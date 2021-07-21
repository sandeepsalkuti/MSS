import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import axios from "axios";
import LandingPage from "../mainactivity/landingpage.component";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9]+@miraclesoft\.com$/,
      "Email must match company domain"
    ),
  password: yup
    .string()
    //.required("Password is required.")
    // .min(5).max(12)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    console.log("formdata:", data);
    axios.post("http://localhost:3007/login/", data).then(
      (response) => {
        // {
        //   isLoggedIn ? <LandingPage /> : null
        // }
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <h3>Log in</h3>

        <div className="form-group required">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="name"
            placeholder="Enter email"
            ref={register}
          />
          <div className="error-msg">
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>

        <div className="form-group required">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            ref={register}
          />
          <div className="error-msg">
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>

      <p className="forgot-password text-right">
        <NavLink className="nav-link" to={"/register"}>
          New User?
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
