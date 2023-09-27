import React, { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import DisplayContext from "../contexts/DisplayContext";
import ExerciseContext from "../contexts/ExerciseContext";
import { Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function Home() {
  const { loggedIn } = useContext(UserContext);
  const [display, setDisplay] = useState("home");
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = async () => {
    try {
      const exData = await fetch("http://localhost:3001/exercise");
      const exList = await exData.json();
      setExerciseList(exList);
    } catch (err) {
      console.error(err);
    }
  };

  if (!loggedIn) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <DisplayContext.Provider value={{ display, setDisplay }}>
        <Navbar />
        <ExerciseContext.Provider value={{ exerciseList, setExerciseList }}>
          <Dashboard />
        </ExerciseContext.Provider>
      </DisplayContext.Provider>
    );
  }
}
