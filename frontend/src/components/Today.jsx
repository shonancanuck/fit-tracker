import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import InfoSubmit from "./InfoSubmit";

export default function Today() {
  const [exerciseList, setExerciseList] = useState([]);
  const { userId } = useContext(UserContext);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {
    console.log(selectedExercise);
  }, [selectedExercise]);

  const getExercises = async () => {
    try {
      const exData = await fetch("http://localhost:3001/exercise");
      const exList = await exData.json();
      setExerciseList(exList);
    } catch (err) {
      console.error(err);
    }
  };

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
            <InfoSubmit />
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
