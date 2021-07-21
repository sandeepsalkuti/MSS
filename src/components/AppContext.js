import React, {useState} from "react";
import axios from "axios";

const AppContext=React.createContext({});

export const AppProvider = ({children}) => {
    const [loginresponse,setLoginResponse]=useState({});
    const[loginstatus,setLoginStatus]=useState(false);

    const[registerstatus,setRegisterStatus]=useState(false);

    const loginAsync = (data) => {axios.post("http://localhost:8022/login", data).then(
      (response) => {
        setLoginResponse(response.data);
        console.log("response data: ", loginresponse);
        setLoginStatus(true);
        console.log('login status: ', loginstatus);
      },
      (error) => {
        console.log(error);
      }
    )};

    const registerAsync = (data) =>{
        axios.post("http://localhost:8022/RegisterUser", data).then(
      (response) => {
        console.log(response);
        setRegisterStatus(true);
        console.log("register status: ", registerstatus);
      },
      (error) => {
        console.log(error);
      }
    );
    }
    
    return(
        <AppContext.Provider 
            value={{loginresponse, loginstatus,registerstatus,setLoginStatus,loginAsync, registerAsync}}
        >
            {children}
        </AppContext.Provider>
    );
} 

export default AppContext;