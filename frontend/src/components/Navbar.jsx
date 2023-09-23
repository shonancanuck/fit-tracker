import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import DisplayContext from "../contexts/DisplayContext";

export default function Navbar() {
  const { username, userId, loggedIn, setLoggedIn } = useContext(UserContext);
  const { display, setDisplay } = useContext(DisplayContext);

  const handleHome = () => {
    setDisplay("home");
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  const changeDisplay = (str) => {
    setDisplay(str);
  };
  return (
    <header>
      <div>
        <h3>FitTracker</h3>
        {new Date().toDateString()}
        {username}
      </div>

      <nav>
        <ul>
          <li onClick={handleHome}>Home</li>
          <li onClick={() => changeDisplay("recent")}>Recent</li>
          <li onClick={() => changeDisplay("today")}>Today</li>
          <li onClick={() => changeDisplay("history")}> History</li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Log out</button>
    </header>
    //   <h3>FitTracker</h3>
    //   <h5>{new Date().toDateString()}</h5>
    //   <h5>{username}</h5>
    //   <h5 onClick={handleLogout}>Log out</h5>
    // </nav>
  );
}
