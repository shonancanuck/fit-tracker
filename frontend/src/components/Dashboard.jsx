import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import DisplayContext from "../contexts/DisplayContext";

import Recent from "./Recent";
import History from "./History";
import Today from "./Today";

export default function Dashboard() {
  // const { userId, setUserId, username, setUsername, loggedIn, setLoggedIn } =
  //   useContext(UserContext);
  const { display, setDisplay } = useContext(DisplayContext);

  const changeDisplay = (str) => {
    setDisplay(str);
  };
  console.log(display);

  if (display === "home") {
    return (
      <ul>
        <li onClick={() => changeDisplay("recent")}>recent</li>
        <li onClick={() => changeDisplay("today")}>today</li>
        <li onClick={() => changeDisplay("history")}>history</li>
      </ul>
    );
  } else if (display === "recent") {
    console.log(display);
    return <Recent />;
  } else if (display === "today") {
    console.log(display);
    return <Today />;
  } else if (display === "history") {
    console.log(display);
    return <History />;
  }
}
