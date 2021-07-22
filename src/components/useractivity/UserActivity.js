import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserActivity = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    axios("http://localhost:3007/register/")
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
        <h1>In User Activity Page</h1>
        <div>
          {data && data.map((userName) =>{
            return (
              <div>
                <h1>{userName.email}</h1>
              </div>
            );
          })}
        </div>
      </div> 
    );
}

export default UserActivity;
