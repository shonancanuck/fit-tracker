import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import DisplayContext from "../contexts/DisplayContext";
import { Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function Home() {
  const { loggedIn } = useContext(UserContext);
  const [display, setDisplay] = useState("home");

  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <DisplayContext.Provider value={{ display, setDisplay }}>
        <Navbar />
        <Dashboard />
      </DisplayContext.Provider>
    );
  }
}
