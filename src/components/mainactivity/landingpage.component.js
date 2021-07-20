import React,{useContext, useEffect} from "react";

//import styles from './landingpage.component.css';
import UserActivity from "../useractivity/UserActivity";
import UserDetails from "../userdetails/UserDetails";
import Button from "../styledcomponents/Button/Button";
import CheckInForm from '../checkinform/CheckInForm';
import DailyActivity from '../dailyactivity/DailyActivity';
import AppContext from "../AppContext";
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from "react-router-dom";
import Login from "../signup/login.component";

const LandingPage = () => {
  const {loginstatus, loginresponse,setLoginStatus} = useContext(AppContext);
  const detailsHandler = () => {
    //<Link to="/user-details">UserDetails</Link>
    alert("details button clicked");
  };

  const activityHandler = () => {
    //<Link to="/user-activity">UserActivity</Link>
    alert("activity button clicked");
  };

  return (
    
      /* <Router>
        <div style={{ width: "300px", minHeight: "200px", marginLeft: "45px" }}>
          <Button type="rounded" onClick={detailsHandler}>
            UserDetails
          </Button>
          <Route path="/user-details" component={UserDetails} />
        </div>
        <div
          style={{
            width: "300px",
            minHeight: "100px",
            marginTop: "10px",
            marginLeft: "30px",
            padding: "10px 20px",
          }}
        >
          <Button type="rounded" onClick={activityHandler}>
            UserActivity
          </Button>
          <Route path="/user-activity" component={UserActivity} />
        </div>
      </Router> */
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
                  <Link className="nav-link" to={"/DailyActivity"}>
                    DailyActivity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Logout"}>
                    Logout
                  </Link>
                </li>

                </ul>
            </div>
          </div>
        </nav>
        <div>
          { loginstatus && loginresponse.role === "Mangerial_Role"?
          <h1>You are in Manager Page, Coming Soon!!...</h1> :<DailyActivity/>}
          
        </div>
        <Switch>
        <Route path="/CheckIn" component={CheckInForm} />
        <Route path="/DailyActivity" component={DailyActivity} />
            <Route path="/Logout" >
            {loginstatus ? setLoginStatus(false)  : ""}
              </Route>
        </Switch>
    </div>
    </div>
  );
};

export default LandingPage;
