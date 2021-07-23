import React, { useState,useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; 
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import AppContext from "../../AppContext"
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const EmployeeData = () => {
  const { loginstatus, loginresponse, loginAsync } = useContext(AppContext);
    console.log("in employee data");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(()=>{

      axios(`http://localhost:8022/findStatusByid/${loginresponse.id}`)
      .then(response => {
        console.log(response.data);
        setData(response.data)
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() =>{
        setLoading(false);
      })
    }, []);
    const [users, setUser] = useState([]);
  return (
    // <div>
      
    //   <h3>Employee Data</h3>
    //   <div>
    //     <div>
    //         <p>Name:</p>
    //     </div>
    //     <div>
    //     <div style={{backgroundColor:"#f0f0f0", paddingTop:"5px"}}>
    //         {data && data.map((entry) =>{
    //             return (
    //               <div class="row" style={{ backgroundColor: "white", border: "2px solid black" }}>
    //                 <div class="col-sm-2" style={{borderRight: "2px solid black"}}>
    //                   <p style={{fontSize: "18px", padding: "3px"}}>{entry.date}</p>
    //                 </div>
                    
    //                 <div class= "col-sm-8" style={{borderRight: "2px solid black"}}>
    //                   <p style={{fontSize: "18px", padding: "3px"}}>{entry.task}</p>
    //                 </div>

    //                 <div class= "col-sm-2">
    //                   <p style={{fontSize: "18px", padding: "3px"}}>{entry.status}</p>
    //                 </div>
    //               </div>
                    
    //             );
    //           })}
    //         </div>
    //     </div>
    //   </div>
    
      
    // </div>
    
    <div>
    
      
    <div className="container">
    <div className="py-4"> 
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Date</th>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map((entry,index) =>{
        return(
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td style={{width: "10%"}}>{entry.date}</td>
                <td style={{width: "60%"}}>{entry.task}</td>
                <td style={{width: "10%"}}>{entry.status}</td>
                <td style={{width: "20%"}}>
                  <Link class="btn btn-primary mr-2" to={""}>
                  <FaEye />
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={""}>
                    < FaEdit />
                  </Link>
                  <Link
                    class="btn btn-danger"
                    //onClick={() => deleteUser(user.id)}
>
                    <FaTrashAlt/>
                  </Link>
                </td>
              </tr>
           );})}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default EmployeeData;
