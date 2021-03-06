import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "../../App.css";
import { NavLink } from "react-router-dom";
import AppContext from "../AppContext";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

// Validation Schema using Yup
const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9]+@miraclesoft\.com$/,
      "Email must match company domain"
    ),
  secretkey: yup.string().required("Secret Key required").min(4).max(4),
  mainpassword: yup
    .string()
    .required("Password is required.")
    // .min(5).max(12)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  password: yup
    .string()
    .oneOf(
      [yup.ref("mainpassword"), null],
      "Wait! Your password doesn't match.."
    ),
});

function ResetPassword() {
  const { passwordAsync } = useContext(AppContext);

  const [authenticated, setAuthenticated] = useState(false);
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    delete data["mainpassword"];
    console.log("formdata:", data);
    passwordAsync(data);
    // axios.post("http://localhost:8022/ResetPassword", data).then(
    //   (response) => {
    //     setAuthenticated(response);
    //     NotificationManager.success("", "Reset Password Successfully", 1000);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  return (
    <div>
      <h3>Reset Password</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group required">
          <label>Registered Email</label>
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
          <label>Enter Secret Key</label>
          <input
            type="password"
            className="form-control"
            name="secretkey"
            placeholder="Enter 4 digits of secret key"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.secretkey && <p>{errors.secretkey.message}</p>}
          </div>
        </div>

        <div className="form-group required">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            name="mainpassword"
            placeholder="Enter password"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.mainpassword && <p>{errors.mainpassword.message}</p>}
          </div>
        </div>
        <div className="form-group required">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Re-enter password"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        <div className="col text-center">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Reset
          </button>
        </div>

        <p className="forgot-password text-right">
          <NavLink className="nav-link" to={"/login"}>
            back to login page?
          </NavLink>
        </p>
        {/* {authenticated ? (
          <h2>Password reset was successful</h2>
        ) : (
          <h3>Make sure your credentials are correct</h3>
        )} */}
      </form>
    </div>
  );
}

export default ResetPassword;
