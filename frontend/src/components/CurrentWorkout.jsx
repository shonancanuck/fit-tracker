import Today from "./Today";
import InfoSubmit from "./InfoSubmit";
import { useContext, useState, useEffect } from "react";
import ExerciseContext from "../contexts/ExerciseContext";

export default function CurrentWorkout() {
  const { exerciseList } = useContext(ExerciseContext);
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
      {selectedExercise ? (
        <>
          <InfoSubmit
            selectedExercise={selectedExercise}
            handleUnselection={handleUnselection}
          />
          <p onClick={handleUnselection}>back</p>
        </>
      ) : (
        <Today handleSelection={handleSelection} />
      )}
    </>
  );
}
