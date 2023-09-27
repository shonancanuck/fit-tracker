import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import DisplayContext from "../contexts/DisplayContext";
import ExerciseContext from "../contexts/ExerciseContext";

import Recent from "./Recent";
import History from "./History";
import Today from "./Today";

export default function Dashboard() {
  // const { userId, setUserId, username, setUsername, loggedIn, setLoggedIn } =
  //   useContext(UserContext);
  const { display, setDisplay } = useContext(DisplayContext);
  const { exerciseList, setExerciseList } = useContext(ExerciseContext);

  const changeDisplay = (str) => {
    setDisplay(str);
  };

  if (display === "home") {
    return (
      <main>
        <ul>
          <li onClick={() => changeDisplay("recent")}>
            My Most Recent Workout
          </li>
          <li onClick={() => changeDisplay("today")}>Record Today's Workout</li>
          <li onClick={() => changeDisplay("history")}>Check My Progress</li>
        </ul>
      </main>
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
