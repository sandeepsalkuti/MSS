import React, { useContext, useEffect } from "react";
import {useHistory} from "react-router-dom"
//import styles from './landingpage.component.css';
import UserActivity from "../useractivity/UserActivity";
import UserDetails from "../userdetails/UserDetails";
import Button from "../styledcomponents/Button/Button";
import CheckInForm from "../checkinform/CheckInForm";
import DailyActivity from "../dailyactivity/DailyActivity";
import EmployeeData from '../userdata/EmployeeData/EmployeeData';
import AppContext from "../AppContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Login from "../signup/login.component";
import ManagerData from "../userdata/ManagerData/ManagerData";

const LandingPage = () => {
  let history=useHistory();
  const { loginstatus, loginresponse, setLoginStatus } = useContext(AppContext);
  const detailsHandler = () => {
    //<Link to="/user-details">UserDetails</Link>
    alert("details button clicked");
  };

  const activityHandler = () => {
    //<Link to="/user-activity">UserActivity</Link>
    alert("activity button clicked");
  };

  const logouthandler=()=>{
    //setLoginStatus(false);
    history.push("/Login")
  }

  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav navbar-right">
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
        <div>
          {loginstatus && loginresponse.role === "Managerial_Role" ? (
            <ManagerData/>
          ) : (
            <DailyActivity />
          )}
        </div>
        <Switch>
        <Route path="/EmployeeData" component={EmployeeData} />
          <Route path="/CheckIn" component={CheckInForm} />
          <Route path="/DailyActivity" component={DailyActivity} />
          {/* <Route path="/Logout">
            {setLoginStatus(false)}
          </Route> */}
          {/* <Route path="/Logout">
                { <Redirect to="/Login"/> }
              </Route> */}
        </Switch>
      </div>
    </div>
  );
};

export default LandingPage;
