import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import UserContext from "./contexts/UserContext";

function App() {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ userId, setUserId, username, setUsername }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
