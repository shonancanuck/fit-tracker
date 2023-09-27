import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import ExerciseContext from "../contexts/ExerciseContext";

export default function History() {
  const { exerciseList } = useContext(ExerciseContext);
  const { userId } = useContext(UserContext);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [displayHistory, setDisplayHistory] = useState(null);

  useEffect(() => {
    getHistory();
    console.log("get history " + selectedHistory);
  }, [selectedHistory]);

  const handleSelection = (e) => {
    const selection = exerciseList.find(
      (ex) => ex["exercise_name"] === e.target.className
    );
    setSelectedHistory(selection);
    console.log(selectedHistory);
  };

  const handleUnselection = () => {
    setDisplayHistory(null);
    setSelectedHistory(null);
  };

  const getHistory = async () => {
    if (selectedHistory) {
      try {
        const historyData =
          await fetch(`http://localhost:3001/history/extended/user/${userId}/exercise/
        ${selectedHistory["exercise_id"]}`);
        const exHistory = await historyData.json();
        setDisplayHistory(exHistory);
        console.log(displayHistory);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!displayHistory) {
    return (
      <>
        <h3>Select an exercise to show your progress</h3>
        <main>
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
    );
  } else {
    return (
      <>
        <h3>{selectedHistory["exercise_name"].toUpperCase()}</h3>
        <p onClick={handleUnselection}>back</p>
        <main>
          <ul>
            {displayHistory.map((entry) => (
              <li key={entry.date}>
                {new Date(entry.date).toDateString()} reps:
                {entry.reps} sets: {entry.sets} weight: {entry.weight}
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}
