import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";


const EmployeeData = () => {
    console.log("in employee data");

  return (
    <div>
      
      <h3>Employee Data</h3>
      <div>
        <div>
            <p>Name:</p>
        </div>
        <div>
            <button style={{marginRight: "10px"}} type="submit" className="btn btn-dark btn-lg btn-block" >
              Fetch Data
            </button>
            
            <button style={{marginLeft: "10px"}} className="btn btn-dark btn-lg btn-block">
              UpdateData
            </button> 
        </div>
      </div>
    
      
    </div>
  );
};

export default EmployeeData;
