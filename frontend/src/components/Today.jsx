import React, { useState, useEffect, useContext } from "react";
import InfoSubmit from "./InfoSubmit";
import ExerciseContext from "../contexts/ExerciseContext";
import WorkoutContext from "../contexts/WorkoutContext";
export default function Today() {
  const { exerciseList } = useContext(ExerciseContext);
  const { todaysWorkout, setTodaysWorkout } = useContext(WorkoutContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  // useEffect(() => {
  //   console.log("set workout");
  //   setTodaysWorkout(createBaseWorkout);
  //   console.log(todaysWorkout);
  // }, []);

  useEffect(() => {
    console.log("today's workout: ", todaysWorkout);
  }, []);

  useEffect(() => {
    console.log(selectedExercise);
  }, [selectedExercise]);

  // const createBaseWorkout = () =>
  //   exerciseList.map((ex) => {
  //     return {
  //       exName: ex["exercise_name"],
  //       exId: ex["exercise_id"],
  //       reps: 0,
  //       sets: 0,
  //       weight: 0,
  //     };
  //   });

  const handleSelection = (e) => {
    const selection = exerciseList.find(
      (ex) => ex["exercise_name"] === e.target.className
    );
    setSelectedExercise(selection);
  };

  const handleUnselection = () => {
    setSelectedExercise(null);
  };

  return (
    <>
      <>
        {selectedExercise ? (
          <>
            <h4>{selectedExercise["exercise_name"].toUpperCase()}</h4>
            <InfoSubmit
              currentSelection={selectedExercise}
              unselect={handleUnselection}
            />
            <p onClick={handleUnselection}>back</p>
          </>
        ) : (
          <></>
        )}
      </>
      <>
        <h3>Today's workout</h3>
        <main>
          <p onClick={handleUnselection}>back</p>
          <ul>
            {todaysWorkout.map((ex, index) => (
              <li
                key={ex.exName}
                className={ex.exName}
                onClick={handleSelection}
              >
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
    </>
  );
}
