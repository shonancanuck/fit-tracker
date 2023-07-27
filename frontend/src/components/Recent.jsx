import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Recent() {
  const { userId, username } = useContext(UserContext);
  const [workoutData, setWorkoutData] = useState([]);
  const [lastWorkout, setLastWorkout] = useState([]);

  useEffect(() => {
    getRecentHistory();
    setLastWorkout(() => displayData);
  }, []);

  const getRecentHistory = async () => {
    const recentData = await fetch(
      `http://localhost:3001/user/history/recent/${userId}`
    );
    const recentHistory = await recentData.json();
    setWorkoutData(() => recentHistory);
  };

  const displayData =
    workoutData &&
    workoutData.map((ex) => {
      return (
        <>
          <li
            key={ex["exercise_name"]}
            exerciseid={ex["exercise_id"]}
            className="mainlist"
          >
            {ex["exercise_name"]}
            <ul className="sublist">
              <li>weight: {ex.weight}</li>
              <li>reps: {ex.reps}</li>
              <li>sets: {ex.sets}</li>
            </ul>
          </li>
        </>
      );
    });

  return (
    <>
      <h3>Most recent workout:</h3>
      <ul>{lastWorkout}</ul>
    </>
  );
}
