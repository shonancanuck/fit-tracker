import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function Home() {
  const [logReg, setLogReg] = useState("log");
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogReg = () => {
    if (logReg === "log") {
      setLogReg("reg");
    } else if (logReg === "reg") {
      setLogReg("log");
    }
  };
  return loggedIn ? (
    <Dashboard />
  ) : (
    <>
      {logReg === "reg" && (
        <Register
          toggleLogReg={toggleLogReg}
          setLoggedIn={() => setLoggedIn(true)}
        />
      )}
      {logReg === "log" && (
        <Login
          toggleLogReg={toggleLogReg}
          setLoggedIn={() => setLoggedIn(true)}
        />
      )}
    </>
  );
}
