import React, { useState } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [loginresponse, setLoginResponse] = useState({});
  const [loginstatus, setLoginStatus] = useState(false);
  const [registerstatus, setRegisterStatus] = useState(false);
  const [passwordstatus, setPasswordStatus] = useState(false);
  const [entrydata, setEntryData] = useState("");

  const loginAsync = (data) => {
    axios.post("http://localhost:8022/login", data).then(
      (response) => {
        setLoginResponse(response.data);
        console.log("response data: ", loginresponse);
        setLoginStatus(true);
        console.log("login status: ", loginstatus);
        NotificationManager.success("", "Login Successfully", 1500);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const registerAsync = (data) => {
    axios.post("http://localhost:8022/RegisterUser", data).then(
      (response) => {
        console.log(response);
        setRegisterStatus(true);
        NotificationManager.success("", "Registered Successfully", 1500);
        console.log("register status: ", registerstatus);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const passwordAsync = (data) => {
    axios.post("http://localhost:8022/ResetPassword", data).then(
      (response) => {
        console.log(response);
        setPasswordStatus(true);
        NotificationManager.success("", "Password Reset Successfully", 1500);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const editAsync = (entryid) => {
    console.log("clicked entryid", entryid);
    axios
      .get(`http://localhost:8022/findStatusByActivityId/${entryid}`)
      .then((response) => {
        console.log("edithandler", response.data);
        setEntryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        loginresponse,
        loginstatus,
        registerstatus,
        passwordstatus,
        entrydata,
        setLoginStatus,
        loginAsync,
        registerAsync,
        passwordAsync,
        editAsync,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
