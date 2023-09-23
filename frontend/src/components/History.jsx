import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function History() {
  const [exerciseList, setExerciseList] = useState([]);
  const { userId } = useContext(UserContext);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [extendedHistory, setExtendedHistory] = useState(null);

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {});

  const getExercises = async () => {
    try {
      const exData = await fetch("http://localhost:3001/exercise");
      const exList = await exData.json();
      setExerciseList(exList);
      console.log(exerciseList);
    } catch (err) {
      console.error(err);
    }
  };

  const selectHistory = (e) => {
    if (selectedHistory) {
      setSelectedHistory(null);
    } else {
      const selection = exerciseList.find(
        (ex) => ex["exercise_name"] === e.target.className
      );
      setSelectedHistory(selection);
    }
    console.log(selectedHistory);
  };

  const getHistory = async () => {
    try {
      const historyData =
        await fetch(`http://localhost:3001/history/extended/${userId}/
      ${selectedHistory["exercise_id"]}`);
      const exHistory = await historyData.json();
      setExtendedHistory(exHistory);
      console.log(extendedHistory);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <ul>
        {exerciseList.map((ex, index) => (
          <li
            key={ex["exercise_name"]}
            className={ex["exercise_name"]}
            onClick={selectHistory}
          >
            {ex["exercise_name"]}
          </li>
        ))}
      </ul>
    </>
  );
}
