import axios from "axios";
import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

const ManagerData = () => {
  const [data, setData] = useState("");
  const [singleData, setSingleData] = useState("");

  const managerdata = async () => {
    await axios("http://localhost:8022//GetAllBenchEmployeeDetails")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // console.error("Error fetching data: ", error);
        // setError(error);
      });
  };
  useEffect(() => {
    managerdata();
  }, [data]);

  const onClickHandler = async (id) => {
    await axios(`http://localhost:8022/findStatusByid/${id}`)
      .then((response) => {
        console.log(response.data);
        setSingleData(response.data);
      })
      .catch((error) => {
        console.log(error);
        // console.error("Error fetching data: ", error);
        // setError(error);
      });
  };

  return (
    <div>
      <h3>Manager View Page</h3>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav main-auto">
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/EmployeeData"}>
                    Employee's-Tasks
                  </Link>
                </li> */}
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
          {/* <Route path="/EmployeeData" component={EmployeeData} /> */}
        </Switch>
        <div class="container">
          <div class="row">
            <div class="col-sm-3 " style={{ paddingTop: "5px" }}>
              {data &&
                data.map((userName) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "white",
                        border: "2px solid black",
                        margin: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          padding: "5px",
                          textAlign: "center",
                        }}
                        onClick={() => onClickHandler(userName.uid)}
                      >
                        {userName.name.substr(0, userName.name.indexOf("@"))}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div
              class="col-sm-9"
              style={{ backgroundColor: "#f0f0f0", paddingTop: "5px" }}
            >
              <div className="container">
                <div className="py-4">
                  <table class="table border shadow">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {singleData &&
                        singleData.map((entry, index) => {
                          return (
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td style={{ width: "18%" }}>{entry.date}</td>
                              <td style={{ width: "45%" }}>{entry.task}</td>
                              <td style={{ width: "20%" }}>{entry.status}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerData;
