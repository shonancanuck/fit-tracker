import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function Recent() {
  const { userId } = useContext(UserContext);
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    getRecentHistory();
  }, []);

  const getRecentHistory = async () => {
    const recentData = await fetch(
      `http://localhost:3001/history/recent/user/${userId}`
    );
    const recentHistory = await recentData.json();
    console.log(recentHistory);
    setWorkoutData(() => recentHistory);
  };

  const displayData = workoutData.map((ex) => {
    return (
      <>
        <li
          key={ex["exercise_name"]}
          exerciseid={ex["exercise_id"]}
          className="mainlist"
        >
          {ex["exercise_name"].toUpperCase()}
          <ul className="sublist">
            <li key={ex["exercise_name"] + "weight"}>weight: {ex.weight}</li>
            <li key={ex["exercise_name"] + "reps"}>reps: {ex.reps}</li>
            <li key={ex["exercise_name"] + "sets"}>sets: {ex.sets}</li>
          </ul>
        </li>
      </>
    );
  });

  return (
    <>
      <h3>Most recent workout:</h3>
      <main>
        <ul>{displayData}</ul>
      </main>
    </>
  );
}
