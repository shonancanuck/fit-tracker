import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { userId, setUserId, username, setUsername, setLoggedIn } =
    useContext(UserContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit login");
    console.log(username, userId);
    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log("Login successful!");
        console.log(response);
        const userInfo = await response.json();
        console.log(userInfo);
        setUserId(userInfo.userId);
        setUsername(userInfo.username);
        setLoggedIn(true);
        navigate("/");
      } else {
        console.log(response);
        console.log("Login unsuccessful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Log in to an account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <input type="submit" />
      </form>

      <p>
        Need an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
