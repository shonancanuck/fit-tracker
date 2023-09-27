import { createContext } from "react";

const ExerciseContext = createContext({
  exerciseList: [],
  setExerciseList: () => {},
});

export default ExerciseContext;
