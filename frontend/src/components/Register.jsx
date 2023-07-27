import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Register({ toggleLogReg, setLoggedIn }) {
  const [password, setPassword] = useState("");
  const { userId, setUserId, username, setUsername } = useContext(UserContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, password);
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (response.ok) {
        console.log("Registration successful!");
        const userInfo = await response.json();
        console.log(userInfo);
        setUserId(userInfo.id);
        setUsername(userInfo.username);
        setLoggedIn(true);
      } else {
        console.log(response);
        console.log("Registration unsuccessful");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Register for an account</h3>
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
        Already have an account? <span onClick={toggleLogReg}>Log in</span>
      </p>
    </div>
  );
}
