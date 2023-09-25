import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function History() {
  const [exerciseList, setExerciseList] = useState([]);
  const { userId } = useContext(UserContext);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [displayHistory, setDisplayHistory] = useState(null);

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {
    getHistory();
    console.log(selectedHistory);
  }, [selectedHistory]);

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
    setSelectedHistory(selection);
  };

  const handleUnselection = () => {
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

  if (!selectedHistory) {
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
        <p onClick={handleUnselection}>back</p>
      </>
    );
  }
}
