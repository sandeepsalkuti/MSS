import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import AppContext from "../../AppContext";
import DailyActivity from "../../dailyactivity/DailyActivity";
import ChekInForm from "../../checkinform/CheckInForm";
import "./EmployeeData.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const EmployeeData = () => {
  const { loginresponse, editAsync } = useContext(AppContext);
  const [entrydata, setEntryData] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const deleteUser = (index, id) => {
    axios
      .delete(`http://localhost:8022/DeleteByActivityId/${id}`)
      .then((response) => {
        let dupdata = [...data];
        dupdata.splice(index, 1);
        setData([...dupdata]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  // const editHandler = (entryid) => {
  //   console.log("clicked entryid", entryid);
  //   axios
  //     .get(`http://localhost:8022/findStatusByActivityId/${entryid}`)
  //     .then((response) => {
  //       console.log("edithandler", response.data);
  //       setEntryData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     });
  // };
  const editHandler = (entryid) => {
    editAsync(entryid);
  };
  useEffect(() => {
    axios(`http://localhost:8022/findStatusByid/${loginresponse.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
          <Route path="/DailyActivity" component={DailyActivity} />
          <Route path="/CheckIn" component={ChekInForm} />
        </Switch>
        <div className="container">
          <div className="py-4">
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((entry, index) => {
                    return (
                      <tr>
                        <th scope="row">{index}</th>
                        <td style={{ width: "12%" }}>{entry.date}</td>
                        <td style={{ width: "45%" }}>{entry.task}</td>
                        <td style={{ width: "15%" }}>{entry.status}</td>
                        <td style={{ width: "30%" }}>
                          {/* <Link
                            class="btn btn-primary mr-2"
                            to={`ViewEmployee/findStatusByid/${loginresponse.id}/${entry.id}`}
                          >
                            View
                            <FaEye /> 
                          </Link> */}
                          <Link
                            class="btn btn-outline-primary mr-2"
                            to={"/EditEmployee"}
                          >
                            <button
                              type="button"
                              onClick={() => editHandler(entry.id)}
                            >
                              Edit
                            </button>
                          </Link>
                          <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(index, entry.id)}
                          >
                            <FaTrashAlt />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeData;
