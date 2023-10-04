import React, { useContext, useState, useEffect } from "react";
import DisplayContext from "../contexts/DisplayContext";
import ExerciseContext from "../contexts/ExerciseContext";
import WorkoutContext from "../contexts/WorkoutContext";

import Recent from "./Recent";
import History from "./History";
import CurrentWorkout from "./CurrentWorkout";

export default function Dashboard() {
  const { display, setDisplay } = useContext(DisplayContext);
  const { exerciseList } = useContext(ExerciseContext);
  const [todaysWorkout, setTodaysWorkout] = useState([]);

  useEffect(() => {
    console.log("set workout");
    setTodaysWorkout(createBaseWorkout());
    // sometimes workout fails to create. Issue seems fixed, but requires further testing
    console.log(todaysWorkout);
  }, []);

  const createBaseWorkout = () =>
    exerciseList.map((ex) => {
      return {
        exName: ex["exercise_name"],
        exId: ex["exercise_id"],
        reps: 0,
        sets: 0,
        weight: 0,
      };
    });

  const changeDisplay = (str) => {
    setDisplay(str);
  };

  if (display === "home") {
    console.log("home");
    return (
      <main>
        <ul>
          <li onClick={() => changeDisplay("recent")}>
            My Most Recent Workout
          </li>
          <li onClick={() => changeDisplay("current")}>
            Record Today's Workout
          </li>
          <li onClick={() => changeDisplay("history")}>Check My Progress</li>
        </ul>
      </main>
    );
  } else if (display === "recent") {
    console.log(display);
    return <Recent />;
  } else if (display === "current") {
    console.log(display);
    return (
      <WorkoutContext.Provider value={{ todaysWorkout, setTodaysWorkout }}>
        <CurrentWorkout />
      </WorkoutContext.Provider>
    );
  } else if (display === "history") {
    console.log(display);
    return <History />;
  }
}
