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
        <h3 className="title">
          Fit <br />
          Tracker
        </h3>
      </div>
      <div>
        <nav>
          <ul>
            <li className="navbar-link" onClick={handleHome}>
              Home
            </li>
            <li className="navbar-link" onClick={() => changeDisplay("recent")}>
              Recent
            </li>
            <li className="navbar-link" onClick={() => changeDisplay("today")}>
              Today
            </li>
            <li
              className="navbar-link"
              onClick={() => changeDisplay("history")}
            >
              {" "}
              History
            </li>
            <li className="navbar-link" onClick={handleLogout}>
              Log out
            </li>
          </ul>
        </nav>
        {/* <div>
          {new Date().toDateString()}
          {username}
        </div> */}
      </div>
    </header>
    //   <h3>FitTracker</h3>
    //   <h5>{new Date().toDateString()}</h5>
    //   <h5>{username}</h5>
    //   <h5 onClick={handleLogout}>Log out</h5>
    // </nav>
  );
}
