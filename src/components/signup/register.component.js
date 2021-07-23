
import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Login from "./login.component";
import * as yup from "yup";
import axios from "axios";
import "../../App.css";
import AppContext from "../AppContext";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

// Validation Schema using Yup
const Schema = yup.object().shape({
  // firstName: yup.string().required("first name is required").min(5),
  // lastName: yup.string().required("last name is required"),
  // name: yup.string().required("last name is required"),
  name: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9]+@miraclesoft\.com$/,
      "Email must match company domain"
    ),
  secretKey: yup.string().required("Secret Key required").min(4).max(4),
  confirmkey: yup
  .string()
  .oneOf(
    [yup.ref("secretKey"), null],
    "Wait! Your Secret key doesn't match.."
  ),
  

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

function Register() {
  const {registerAsync} = useContext(AppContext)

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    delete data["mainpassword"];
    delete data["confirmkey"];
    console.log("formdata:", data);
    registerAsync(data);
    
  };

  return (
    <div>
      <h3>Register</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group required">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="example@miraclesoft.com"
            ref={register({ required: true })}
          />
          <div className="error-msg">
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
        {/* <label>First name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First name"
            ref={register({ required: true })}
          />
          <div className="error-msg">
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
        </div>

        <div className="form-group required">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last name"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
        </div> */}

        <div className="form-group">
          <label>Select Employment Type</label>
          <select ref={register} name="role" className="form-control">
            <option value="Bench_Employee">Member</option>
            <option value="Mangerial_Role">Manager</option>
          </select>
        </div>

        <div className="error-msg">
          {errors.role && <p>{errors.role.message}</p>}
        </div>

        {/* <div className="form-group required">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div> */}
        <div className="form-group required">
        <label>Enter Secret Key</label>
          <input
            type="password"
            className="form-control"
            name="secretKey"
            placeholder="Enter 4 digits of secret key"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.secretKey && <p>{errors.secretKey.message}</p>}
          </div>
        </div>
        <div className="form-group required">
        <label>Confirm Secret key</label>
          <input
            type="password"
            className="form-control"
            name="confirmkey"
            placeholder="Enter 4 digits of secret key"
            ref={register({ required: true })}
            required
          />
          <div className="error-msg">
            {errors.confirmkey && <p>{errors.confirmkey.message}</p>}
          </div>
        </div>

        <div className="form-group required">
          <label>Password</label>
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
          Register
        </button>
        </div>

        <p className="forgot-password text-right">
          <NavLink className="nav-link" to={"/login"}>
            Already registered?
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;
