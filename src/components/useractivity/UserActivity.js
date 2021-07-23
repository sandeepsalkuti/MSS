import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';


const UserActivity = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios("http://localhost:3007/tasks/")
    .then(response => {
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

    return (
      <div>
        <h3>In User Activity Page</h3>
        <div class="container">
          <div class="row">
            <div class="col-sm-3 " style={{ paddingTop:"5px"}}>
              {data && data.map((userName) =>{
                return (
                  <div style={{ backgroundColor: "white", border: "2px solid black", margin: "5px", }}>
                    <p style={{fontSize: "20px", padding: "5px", textAlign:"center"}}>{userName.name}</p>
                    </div>
                );
              })}
            </div>
            <div class="col-sm-9" style={{backgroundColor:"#f0f0f0", paddingTop:"5px"}}>
            {/* {data && data.map((userName) =>{
                return (
                  <div class="row" style={{ backgroundColor: "white", border: "2px solid black" }}>
                    <div class="col-sm-2" style={{borderRight: "2px solid black"}}>
                      <p style={{fontSize: "18px", padding: "3px"}}>{userName.id}</p>
                    </div>
                    
                    <div class= "col-sm-8" style={{borderRight: "2px solid black"}}>
                      <p style={{fontSize: "18px", padding: "3px"}}>{userName.task}</p>
                    </div>

                    <div class= "col-sm-2">
                      <p style={{fontSize: "18px", padding: "3px"}}>{userName.name}</p>
                    </div>
                  </div>
                    
                );
              })} */}

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
          </div>
        </div>
  

        
        
        {/* <div>
          {data && data.map((userName) =>{
            return (
              <div>
                <h1>{userName.email}</h1>
              </div>
            );
          })}
        </div> */}
      </div> 
    );
}

export default UserActivity;
