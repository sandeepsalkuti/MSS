import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import axios from "axios";

const ViewEmployee = () => {
  const { loginresponse } = useContext(AppContext);
  const [data, setData] = useState("");

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(
      `http://localhost:8022/findStatusByid/${loginresponse.id}`
    );
    console.log("result data", res.data);
    setData(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/landing">
        back to Home
      </Link>
      <h6 className="display-6">User Id: {data.name}</h6>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Date: {data.date}</li>
        <li className="list-group-item">Task: {data.task}</li>
        <li className="list-group-item">Status: {data.status}</li>
      </ul>
    </div>
  );
};

export default ViewEmployee;
