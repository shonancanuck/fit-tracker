import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import WorkoutContext from "../contexts/WorkoutContext";

export default function InfoSubmit({ selectedExercise, handleUnselection }) {
  const { userId } = useContext(UserContext);
  const { todaysWorkout, setTodaysWorkout } = useContext(WorkoutContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const infoSet = {
      user_id: userId,
      exercise_id: selectedExercise["exercise_id"],
      date: new Date(),
      weight: e.target.weight.value,
      reps: e.target.reps.value,
      sets: e.target.sets.value,
    };

    console.log(infoSet);

    try {
      const response = await fetch("http://localhost:3001/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoSet),
      });
      if (response.ok) {
        console.log("Submission successful!");
        console.log(response);
        const newInfo = await response.json();
        console.log(newInfo);
        const updateTodaysWorkout = () => {
          const updatedWorkout = todaysWorkout.map((obj) => {
            if (obj.exId === newInfo[0]["exercise_id"]) {
              console.log("equal! ", obj.exId, newInfo[0]["exercise_id"]);
              return {
                ...obj,
                reps: newInfo[0].reps,
                sets: newInfo[0].sets,
                weight: newInfo[0].weight,
              };
            }
            return obj;
          });
          updatedWorkout.sort((a, b) => a.exId - b.exId);
          setTodaysWorkout(updatedWorkout);
        };
        updateTodaysWorkout();
      }
    } catch (err) {
      console.error(err);
    }
    console.log(todaysWorkout);
    handleUnselection();
  };

  return (
    <>
      <h3>{selectedExercise["exercise_name"].toUpperCase()}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">weight</label>
        <input type="number" name="weight" />
        <label htmlFor="reps">reps</label>
        <input type="number" name="reps" min={0} max={30} />
        <label htmlFor="sets">sets</label>
        <input type="number" name="sets" min={0} max={10} />
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </>
  );
}
