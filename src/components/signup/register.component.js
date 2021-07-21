// import React, { useState } from "react";
// import Login from "./login.component";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const Register = () => {
//   const [userRegistration, setUserRegistration] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [records, setRecords] = useState([]);

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserRegistration({ ...userRegistration, [name]: value });
//   };

//   const formSubmissionHandler = (e) => {
//     e.preventDefault();
//     const newRecord = {
//       ...userRegistration,
//       id: new Date().getTime().toString(),
//     };
//     setRecords([...records, newRecord]);
//     setUserRegistration({ username: "", email: "", phone: "", password: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={formSubmissionHandler}>
//         <h3>Register</h3>

//         <div className="form-group">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={userRegistration.firstName}
//             onChange={handleInput}
//             name="firstName"
//             id="firstName"
//             placeholder="First name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Last name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={userRegistration.lastName}
//             onChange={handleInput}
//             name="lastName"
//             id="lastName"
//             placeholder="Last name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={userRegistration.email}
//             onChange={handleInput}
//             name="email"
//             id="email"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={userRegistration.password}
//             onChange={handleInput}
//             name="password"
//             id="password"
//             placeholder="Enter password"
//           />
//         </div>

//         <button type="submit" className="btn btn-dark btn-lg btn-block">
//           Register
//         </button>
//         <p className="forgot-password text-right">
//           <Link className="nav-link" to={"/Login"}>
//             Already registered?
//           </Link>
//         </p>
//       </form>
//       <div>
//         {records.map((curElem) => {
//           const { id, firstName, lastName, email, password } = curElem;
//           return (
//             <div className="showDataStyle" key={id}>
//               <p>{firstName}</p>
//               <p>{lastName}</p>
//               <p>{email}</p>
//               <p>{password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Register;

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

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
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
