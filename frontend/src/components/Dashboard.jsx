import React, { useContext, useState, useEffect } from "react";
import DisplayContext from "../contexts/DisplayContext";
import ExerciseContext from "../contexts/ExerciseContext";
import Recent from "./Recent";
import History from "./History";
import Today from "./Today";
import WorkoutContext from "../contexts/WorkoutContext";

export default function Dashboard() {
  const { display, setDisplay } = useContext(DisplayContext);
  const { exerciseList } = useContext(ExerciseContext);
  const [todaysWorkout, setTodaysWorkout] = useState([]);

  useEffect(() => {
    console.log("set workout");
    setTodaysWorkout(createBaseWorkout());
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
    return (
      <WorkoutContext.Provider value={{ todaysWorkout, setTodaysWorkout }}>
        <Today />
      </WorkoutContext.Provider>
    );
  } else if (display === "history") {
    console.log(display);
    return <History />;
  }
}
