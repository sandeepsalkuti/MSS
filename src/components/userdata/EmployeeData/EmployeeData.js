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
            <button  className="btn btn-dark btn-lg btn-block">FetchData</button> 
            <button  className="btn btn-dark btn-lg btn-block">UpdateData</button> 

        </div>
      </div>
    
      
    </div>
  );
};

export default EmployeeData;
