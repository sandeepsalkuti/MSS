import { useContext } from "react";
import AppContext from "./components/AppContext";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/signup/login.component";
import Register from "./components/signup/register.component";
import Landing from "./components/mainactivity/landingpage.component";
import CheckInForm from "./components/checkinform/CheckInForm";
import DailyActivity from "./components/dailyactivity/DailyActivity";
import ResetPassword from "./components/signup/ResetPassword";
import UserActivity from "./components/useractivity/UserActivity";
import EmployeeData from "../src/components/userdata/EmployeeData/EmployeeData";
import ManagerData from "./components/userdata/ManagerData/ManagerData";
import ViewEmployee from "./components/userdata/EmployeeData/ViewEmployee";
import EditEmployee from "./components/userdata/EmployeeData/EditEmployee";
import About from "./components/about/About";

import { NotificationContainer } from "react-notifications";

function App() {
  const { loginstatus,loginresponse, registerstatus, passwordstatus } =
    useContext(AppContext);

  return (
    <Router>
      <div className="App">
        <NotificationContainer />
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container main-div">
            <Link className="navbar-brand" to={"/About"}>
              Miracle Software Systems
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Register"}>
                    Register
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/Landing"}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/CheckIn"}>
                    CheckIn
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/DailyActivity"}>
                    DailyActivity
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={About}>
                {/* {loginstatus ? (
                  <Redirect to="/Landing" />
                ) : (
                  <Redirect to="/Login" />
                )} */}
              </Route>
              <Route path="/Login">
                {loginstatus ? <Redirect to="/Landing" /> : <Login />}
              </Route>
              <Route path="/Register">
                {registerstatus ? <Redirect to="/Login" /> : <Register />}
              </Route>
              {/* <Route path="/Logout">
                {loginstatus ? <Redirect to="/Login"/> : ""}
              </Route> */}
              {/* <Route path="/Register" component={Register} /> */}
              <Route path="/Landing">
                {loginstatus ? {Landing} : <Redirect to="/Login" />}
              </Route> 

              <Route path="/CheckIn">
                {loginstatus ? {CheckInForm} : <Redirect to="/Login" />}
              </Route> 

              <Route path="/DailyActivity">
                {loginstatus ? {DailyActivity} : <Redirect to="/Login" />}
              </Route> 

              <Route path="/ResetPassword">
                {passwordstatus ? <Redirect to="/Login" /> : <ResetPassword />}
              </Route>

              {/* <Route path="/ResetPassword" component={ResetPassword} /> */}
              <Route path="/UserActivity">
                {loginstatus ? {UserActivity} : <Redirect to="/Login" />}
              </Route>

              <Route path="/EmployeeData">
                {loginstatus ? {EmployeeData} :<Redirect to="/Login" />}
              </Route> 

              <Route path="/ManagerData">
                {loginstatus && loginresponse.role === "Managerial_Role" ? {ManagerData} :<Redirect to="/Login" />}
              </Route> 
              <Route path="/ViewEmployee">
                {loginstatus ? {ViewEmployee} :<Redirect to="/Login" />}
              </Route>
              <Route path="/EditEmployee">
                {loginstatus ? {EditEmployee} :<Redirect to="/Login" />}
              </Route> 
              <Route path="/About" component={About} />
              <Route path="/Logout">
                <Redirect to="/Login" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
