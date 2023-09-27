import { createContext } from "react";

const WorkoutContext = createContext({
  todaysWorkout: {},
  setTodaysWorkout: () => {},
});

export default WorkoutContext;
