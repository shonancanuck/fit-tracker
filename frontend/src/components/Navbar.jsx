import React, { useContext } from "react";

import DisplayContext from "../contexts/DisplayContext";
import UserContext from "../contexts/UserContext";

export default function Navbar() {
  const { setDisplay } = useContext(DisplayContext);
  const { setLoggedIn } = useContext(UserContext);

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
          FIT <br />
          TRACKER
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
      </div>
    </header>
  );
}
