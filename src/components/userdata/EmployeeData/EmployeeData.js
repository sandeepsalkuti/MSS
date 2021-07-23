import React, { useState,useEffect,useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import AppContext from "../../AppContext"


const EmployeeData = () => {
  const { loginstatus, loginresponse, loginAsync } = useContext(AppContext);
    console.log("in employee data");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(()=>{

      axios(`http://localhost:8022/findStatusByid/${loginresponse.id}`)
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
      
      <h3>Employee Data</h3>
      <div>
        <div>
            <p>Name:</p>
        </div>
        <div>
        <div style={{backgroundColor:"#f0f0f0", paddingTop:"5px"}}>
            {data && data.map((entry) =>{
                return (
                  <div class="row" style={{ backgroundColor: "white", border: "2px solid black" }}>
                    <div class="col-sm-2" style={{borderRight: "2px solid black"}}>
                      <p style={{fontSize: "18px", padding: "3px"}}>{entry.date}</p>
                    </div>
                    
                    <div class= "col-sm-8" style={{borderRight: "2px solid black"}}>
                      <p style={{fontSize: "18px", padding: "3px"}}>{entry.task}</p>
                    </div>

                    <div class= "col-sm-2">
                      <p style={{fontSize: "18px", padding: "3px"}}>{entry.status}</p>
                    </div>
                  </div>
                    
                );
              })}
            </div>
        </div>
      </div>
    
      
    </div>
  );
};

export default EmployeeData;
