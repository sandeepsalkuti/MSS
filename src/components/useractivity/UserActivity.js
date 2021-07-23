import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
            <div class="col-sm-4 " style={{ paddingTop:"5px"}}>
              {data && data.map((userName) =>{
                return (
                  <div style={{ backgroundColor: "white", border: "2px solid black", margin: "5px", }}>
                    <p style={{fontSize: "20px", padding: "5px", textAlign:"center"}}>{userName.name}</p>
                    </div>
                );
              })}
            </div>
            <div class="col-sm-8" style={{backgroundColor:"#f0f0f0", paddingTop:"5px"}}>
            {data && data.map((userName) =>{
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
              })}
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
