import {useContext} from 'react';
import AppContext from './components/AppContext'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/signup/login.component";
import Register from "./components/signup/register.component";
import Landing from "./components/mainactivity/landingpage.component";
import CheckInForm from "./components/checkinform/CheckInForm";
import DailyActivity from "./components/dailyactivity/DailyActivity";
import ResetPassword from './components/signup/ResetPassword';
import UserActivity from './components/useractivity/UserActivity';

function App() {
  const {loginstatus,registerstatus} = useContext(AppContext)
  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/Login"}>
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
              <Route exact path="/">
                {loginstatus ? <Redirect to="/Landing"/> : <Redirect to="/Login"/>}
              </Route>
              <Route path="/Login">
                {loginstatus ? <Redirect to="/Landing"/> : <Login/>}
              </Route>
              <Route path="/Register">
                {registerstatus ? <Redirect to="/Login"/> : <Register/>}
              </Route>
              {/* <Route path="/Logout">
                {loginstatus ? <Redirect to="/Login"/> : ""}
              </Route> */}
              {/* <Route path="/Register" component={Register} /> */}
              <Route path="/Landing" component={Landing} />
              <Route path="/CheckIn" component={CheckInForm} />
              <Route path="/DailyActivity" component={DailyActivity} />
              <Route path="/ResetPassword" component={ResetPassword}/>
              <Route path="/UserActivity" component={UserActivity} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
