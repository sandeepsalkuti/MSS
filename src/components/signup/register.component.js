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

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Validation Schema using Yup
const Schema = yup.object().shape({
  firstName: yup.string().required("first name is required").min(5),
  lastName: yup.string().required("last name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Do not let crackers break into your account!")
    .min(8),
  // confirmPassword: yup
  // 	.string()
  // 	.oneOf([yup.ref("password"), null], "Wait! Your password doesn't match.."),
});

function Register() {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <h3>Register</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            placeholder="First name"
            ref={register}
          />

          {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
        </div>
        <p>{errors.firstName?.message}</p>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            ref={register}
          />

          {/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
        </div>
        <p>{errors.lastName?.message}</p>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter email"
            ref={register}
          />

          {/* {errors.email && <p>{errors.email.message}</p>} */}
        </div>
        <p>{errors.email?.message}</p>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter password"
            ref={register}
          />

          {/* {errors.password && <p>{errors.password.message}</p>} */}
        </div>
        <p>{errors.password?.message}</p>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          <Link className="nav-link" to={"/Login"}>
            Already registered?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
