import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import "./EmployeeData.css";
import axios from "axios";

const EditEmployee = () => {
  const { loginresponse, entrydata } = useContext(AppContext);
  const [data, setData] = useState(entrydata);
  const { handleSubmit, register, errors, formState } = useForm({});
  useEffect(() => {
    // console.log("inuseeffectedit", data);
    setData(entrydata);
  }, [entrydata]);

  // useEffect(() => {
  //   loadUser();
  // }, []);
  // const loadUser = async () => {
  //   const res = await axios.get(
  //     `http://localhost:8022/findStatusByid/${loginresponse.id}`
  //   );
  //   console.log("result data", res.data);
  //   setData(res.data);
  // };
  const onInputChange = (e) => {
    console.log("onchange triggered");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    console.log("final data", data);
    axios.put(`http://localhost:8022/editStatus`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <Link className="btn btn-primary edit-back" to="/landing">
        back to Home
      </Link>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Employee Record</h2>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="form-group">
            <label>Update Tasks</label>
            <input
              type="text"
              className="form-control"
              name="task"
              value={data.task}
              ref={register}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Update Status</label>
            <input
              type="text"
              className="form-control"
              name="status"
              value={data.status}
              ref={register}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="col text-center">
            <button className="btn btn-dark btn-lg btn-block">
              Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
