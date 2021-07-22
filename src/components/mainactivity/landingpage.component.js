import React, { useContext, useEffect } from "react";

//import styles from './landingpage.component.css';
import UserActivity from "../useractivity/UserActivity";
import UserDetails from "../userdetails/UserDetails";
import Button from "../styledcomponents/Button/Button";
import CheckInForm from "../checkinform/CheckInForm";
import DailyActivity from "../dailyactivity/DailyActivity";
import AppContext from "../AppContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Login from "../signup/login.component";

const LandingPage = () => {
  const { loginstatus, loginresponse, setLoginStatus } = useContext(AppContext);
  const detailsHandler = () => {
    //<Link to="/user-details">UserDetails</Link>
    alert("details button clicked");
  };

  const activityHandler = () => {
    //<Link to="/user-activity">UserActivity</Link>
    alert("activity button clicked");
  };

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
                  <Link className="nav-link" to={"/Login"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {loginstatus && loginresponse.role === "Managerial_Role" ? (
            <h1>You are in Manager Page, Coming Soon!!...</h1>
          ) : (
            <DailyActivity />
          )}
        </div>
        <Switch>
          <Route path="/CheckIn" component={CheckInForm} />
          <Route path="/DailyActivity" component={DailyActivity} />
          {/* <Route path="/Logout">
            {setLoginStatus(false)}
          </Route> */}
          <Route path="/Logout">
                { <Redirect to="/Login"/> }
              </Route>
        </Switch>
      </div>
    </div>
  );
};

export default LandingPage;
