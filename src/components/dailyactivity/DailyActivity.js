// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TaskList from "./DailyTasks";

// const DailyActivity = () => {
//   const [taskList, setTaskList] = useState([
//     {
//       index: Math.random(),
//       projectName: "",
//       task: "",
//       taskStatus: "",
//     },
//   ]);
//   const addNewRow = () => {
//     setTaskList((prevState) => ({
//       taskList: [
//         ...prevState.taskList,
//         {
//           index: Math.random(),
//           projectName: "",
//           task: "",
//           taskStatus: "",
//         },
//       ],
//     }));
//   };
//   const { handleSubmit, register, errors } = useForm({
//     //resolver: yupResolver(Schema),
//   });
//   const onSubmitHandler = (data) => {
//     console.log("file uploaded successfully: ", data);
//   };

//   return (
//     <div>
//       <h3>DailyActivityForm</h3>
//       <form
//         autoComplete="off"
//         onSubmit={handleSubmit(onSubmitHandler)}
//         className="formfields"
//       >
//         <div className="form-group">
//           <label>Select Date</label>
//           <input
//             type="date"
//             name="date"
//             className="form-control"
//             required
//             ref={register}
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             type="description"
//             name="description"
//             className="form-control"
//             required
//             ref={register}
//           />
//         </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th className="required">Project Name</th>
//               <th className="required">Tasks</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <TaskList
//               add={addNewRow}
//               //delete={clickOnDelete.bind(this)}
//               taskList={taskList}
//             />
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="4">
//                 <button
//                   onClick={addNewRow}
//                   type="button"
//                   className="btn btn-primary text-center"
//                 >
//                   Submit
//                   {/* <i className="fa fa-plus-circle" aria-hidden="true"></i> */}
//                 </button>
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </form>
//     </div>
//   );
// };

// export default DailyActivity;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

const DailyActivity = () => {
  const [inputList, setInputList] = useState([{ task: "", status: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { task: "", status: "" }]);
  };

  const { handleSubmit, register } = useForm({
    //resolver: yupResolver(Schema),
  });
  const onSubmitHandler = (data) => {
    // console.log("file uploaded successfully: ", data.image[0]);
    // data["skillsresult"] = inputList;
    console.log("file uploaded successfully: ", JSON.stringify(data));
    axios.post("http://localhost:3007/tasks/", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h3>DailyActivityForm</h3>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
        className="formfields"
      >
        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            required
            ref={register}
          />
        </div>

        <div className="form-group">
          <label>Enter Tasks</label>
          <textarea
            type="text"
            name="task"
            className="form-control"
            placeholder="Enter your tasks"
            required
            ref={register}
          />
        </div>

        <div className="form-group">
          <label>Select Status</label>
          <select ref={register} name="status" className="form-control">
            <option value="Select Status">Select Status</option>
            <option value="pending">Pending</option>
            <option value="In Progress">In progress</option>
            <option value="Completed">Completed</option>
            <option value="Hold">Hold</option>
          </select>
        </div>

        {/* <div className="form-group">
          <label>Description</label>
          <textarea
            type="description"
            name="description"
            className="form-control"
            required
            ref={register}
          />
        </div> 

        <div className="form-group">
          <label>Enter Your Daily Tasks</label>
          {Object.entries(inputList).map((x, i) => {
            return (
              <div className="box" key={i}>
                {/* <input
                  name="project"
                  placeholder="Enter ProjectName"
                  value={x.project}
                  key={i}
                  onChange={(e) => handleInputChange(e, i)}
                  className="form-control"
                  //ref={register}
                /> 
                //<div className="ml10"> 
                <textarea
                  className="form-control form-rating"
                  name="task"
                  value={x.task}
                  key={i}
                  onChange={(e) => handleInputChange(e, i)}
                  placeholder="Enter Tasks"
                  //ref={register}
                />

                <select
                  value={x.status}
                  onChange={(e) => handleInputChange(e, i)}
                  name="status"
                  key={i + 1}
                  className="form-control form-select"
                >
                  <option value="Select Status">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="In Progress">In progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Hold">Hold</option>
                </select>

                // </div> 
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10 btn btn-danger"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button
                      className="mr10 btn btn-primary text-center"
                      onClick={handleAddClick}
                    >
                      <i className="fa fa-plus-circle" aria-hidden="false">
                        Add
                      </i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div> */}

        <button type="submit" className="btn btn-primary btn-md btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DailyActivity;
