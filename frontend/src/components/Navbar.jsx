import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Navbar() {
  const { username, userId } = useContext(UserContext);

  const handleHome = () => {};
  const handleLogout = () => {};
  return (
    <>
      <h3>FitTracker</h3>
      <h5>{new Date().toDateString()}</h5>
      <h5>{username}</h5>
      <h5 className="logout">Logout</h5>
    </>
  );
}
