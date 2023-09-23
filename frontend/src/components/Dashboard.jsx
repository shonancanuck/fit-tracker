import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Recent from "./Recent";
import History from "./History";

export default function Dashboard() {
  const { userId, setUserId, username, setUsername, loggedIn, setLoggedIn } =
    useContext(UserContext);
  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = () => {
    setShowHistory((current) => !current);
  };

  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <Navbar />
        {showHistory ? (
          <>
            <History /> <h3 onClick={handleHistory}>Last Workout</h3>
          </>
        ) : (
          <>
            <Recent /> <h3 onClick={handleHistory}>Exercise History</h3>
          </>
        )}
      </>
    );
  }
}
