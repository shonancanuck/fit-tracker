import React, { useState } from "react";
import Navbar from "./Navbar";
import Recent from "./Recent";
import History from "./History";

export default function Dashboard() {
  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = () => {
    setShowHistory((current) => !current);
  };
  
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
