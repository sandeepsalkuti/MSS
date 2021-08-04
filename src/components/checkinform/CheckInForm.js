import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GooglePlaces from "../GooglePlaces";
import { Switch, Route, Link } from "react-router-dom";
import EmployeeData from "../userdata/EmployeeData/EmployeeData";
import DailyActivity from "../dailyactivity/DailyActivity";
import axios from "axios";
import "../checkinform/CheckinForm.css";

const ChekInForm = () => {
  const [inputList, setInputList] = useState([{ skill: "", rating: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { skill: "", rating: "" }]);
  };

  const { handleSubmit, register } = useForm({
    //resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    data["skillsresult"] = JSON.stringify(inputList);
    data["file"] = data.image[0].name;
    console.log("file uploaded successfully: ", data);
    axios
      .post("http://localhost:3007/checkin/", data, {
        headers: {
          "Content-Type": "application/json",
          //Accept: "application/pdf",
        },
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav main-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/CheckIn"}>
                    CheckIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Landing"}>
                    DailyActivity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/EmployeeData"}>
                    Employeedata
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Logout"}>
                    <button onClick="logouthandler()">Logout</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/EmployeeData" component={EmployeeData} />
          <Route path="/DailyActivity" component={DailyActivity} />
        </Switch>

        <h3>CheckInFrom</h3>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="form-group">
            <label>Upload Resume</label>
            <input
              type="file"
              name="image"
              className="form-control"
              required
              ref={register}
            />
          </div>

          <div className="form-group">
            <label>Years of Experience</label>
            <select ref={register} name="experience" className="form-control">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">5-10</option>
            </select>
          </div>

          {/* <div className="form-group">
          <label>Select your location</label>
          <GooglePlaces className="form-control"></GooglePlaces>
        </div> */}
          <div className="form-group">
            <label>Enter Your Location</label>
            <input
              name="location"
              placeholder="Enter Your Location"
              className="form-control"
              required
              ref={register}
            />
          </div>

          <div className="form-group">
            <label>Enter Your Skillset</label>
            {Object.entries(inputList).map((x, i) => {
              return (
                <div className="box" key={i}>
                  <input
                    name="skill"
                    placeholder="Enter Skill"
                    value={x.skill}
                    key={i}
                    onChange={(e) => handleInputChange(e, i)}
                    className="form-control"
                    //ref={register}
                  />
                  {/* <div className="ml10"> */}
                  <input
                    className="form-control form-rating"
                    name="rating"
                    value={x.rating}
                    key={i + 1}
                    onChange={(e) => handleInputChange(e, i)}
                    placeholder="Enter Rating"
                    //ref={register}
                  />
                  {/* </div> */}
                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10 btn btn-danger"
                        onClick={() => handleRemoveClick(i)}
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button
                        className="mr10 btn btn-primary text-center"
                        onClick={handleAddClick}
                      >
                        <i className="fa fa-plus-circle" aria-hidden="false">
                          Add
                        </i>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col text-center">
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChekInForm;
