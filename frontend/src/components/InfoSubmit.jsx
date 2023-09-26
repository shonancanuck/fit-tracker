import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function InfoSubmit() {
  const { userId } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">weight</label>
        <input type="number" id="weight" />
        <label htmlFor="reps">reps</label>
        <input type="number" id="reps" min={0} max={30} />
        <label htmlFor="sets">sets</label>
        <input type="number" id="sets" min={0} max={10} />
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </>
  );
}
