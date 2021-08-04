import React, { useContext } from "react";
import "./landingpage.component.css";
import CheckInForm from "../checkinform/CheckInForm";
import DailyActivity from "../dailyactivity/DailyActivity";
import EmployeeData from "../userdata/EmployeeData/EmployeeData";
import AppContext from "../AppContext";
import { Switch, Route, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import ManagerData from "../userdata/ManagerData/ManagerData";

const LandingPage = () => {
  const { loginstatus, loginresponse } = useContext(AppContext);

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
                <NavDropdown
                  align="start"
                  title="UserProfile"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/Logout" onClick="logouthandler()">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                UserProfile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="/Logout" onClick="logouthandler()">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/Logout"}>
                    <button onClick="logouthandler()">Logout</button>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {loginstatus && loginresponse.role === "Managerial_Role" ? (
            <ManagerData />
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
