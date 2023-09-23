import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function Home() {
  const { userId, setUserId, username, setUsername, loggedIn, setLoggedIn } =
    useContext(UserContext);
  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <Navbar />
        <Dashboard />
      </>
    );
  }
}
