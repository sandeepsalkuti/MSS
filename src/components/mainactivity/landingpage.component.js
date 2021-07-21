// import React from "react";
// //import styles from './landingpage.component.css';
// import UserActivity from "../useractivity/UserActivity";
// import UserDetails from "../userdetails/UserDetails";
// import Button from "../styledcomponents/Button/Button";

// import { BrowserRouter as Router, Route } from "react-router-dom";

// const LandingPage = () => {
//   const detailsHandler = () => {
//     //<Link to="/user-details">UserDetails</Link>
//     alert("details button clicked");
//   };

//   const activityHandler = () => {
//     //<Link to="/user-activity">UserActivity</Link>
//     alert("activity button clicked");
//   };

//   return (
//     <div>
//       <Router>
//         <div style={{ width: "300px", minHeight: "200px", marginLeft: "45px" }}>
//           <Button type="rounded" onClick={detailsHandler}>
//             UserDetails
//           </Button>
//           <Route path="/user-details" component={UserDetails} />
//         </div>
//         <div
//           style={{
//             width: "300px",
//             minHeight: "100px",
//             marginTop: "10px",
//             marginLeft: "30px",
//             padding: "10px 20px",
//           }}
//         >
//           <Button type="rounded" onClick={activityHandler}>
//             UserActivity
//           </Button>
//           <Route path="/user-activity" component={UserActivity} />
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState } from "react";
import CheckInForm from "../checkinform/CheckInForm";
import DailyActivity from "../dailyactivity/DailyActivity";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <div>{isLoggedIn ? <DailyActivity /> : <CheckInForm />}</div>;
};

export default LandingPage;
