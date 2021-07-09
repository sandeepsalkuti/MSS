import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/signup/login.component";
import Register from "./components/signup/register.component";
import Landing from "./components/mainactivity/landingpage.component";
import CheckInForm from "./components/checkinform/CheckInForm";

function App() {
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

                <li className="nav-item">
                  <Link className="nav-link" to={"/Landing"}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/CheckIn"}>
                    CheckIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Landing" component={Landing} />
              <Route path="/CheckIn" component={CheckInForm} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
