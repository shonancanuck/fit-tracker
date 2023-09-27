import React, { useContext, useEffect } from "react";
import WorkoutContext from "../contexts/WorkoutContext";

export default function Today({ handleSelection }) {
  const { todaysWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    console.log(todaysWorkout);
  }, []);

  return (
    <>
      <h3>Today's workout</h3>
      <main>
        <ul>
          {todaysWorkout.map((ex, index) => (
            <li key={ex.exName} className={ex.exName} onClick={handleSelection}>
              {ex.exName.toUpperCase()}
              <ul className="sublist">
                <li key={ex.exName + "weight"}>weight: {ex.weight}</li>
                <li key={ex.exName + "reps"}>reps: {ex.reps}</li>
                <li key={ex.exName + "sets"}>sets: {ex.sets}</li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
