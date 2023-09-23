import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import UserContext from "./contexts/UserContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        username,
        setUsername,
        loggedIn,
        setLoggedIn,
      }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
