import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

import Recent from "./Recent";
import History from "./History";

export default function Dashboard() {
  const { userId, setUserId, username, setUsername, loggedIn, setLoggedIn } =
    useContext(UserContext);
  const [display, setDisplay] = useState("home");
  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = () => {
    setShowHistory((current) => !current);
  };

  return (
    <>
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
