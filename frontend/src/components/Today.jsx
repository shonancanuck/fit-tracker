import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import InfoSubmit from "./InfoSubmit";
import ExerciseContext from "../contexts/ExerciseContext";

export default function Today() {
  const { exerciseList } = useContext(ExerciseContext);
  const { userId } = useContext(UserContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    console.log(selectedExercise);
  }, [selectedExercise]);

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
            {exerciseList.map((ex, index) => (
              <li
                key={ex["exercise_name"]}
                className={ex["exercise_name"]}
                onClick={handleSelection}
              >
                {ex["exercise_name"]}
              </li>
            ))}
          </ul>
        </main>
      </>
    </>
  );
}
