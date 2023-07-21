import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => setIsRegistered(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Registration successful!");
        const userInfo = await response.json();
        console.log(userInfo);
        setUserId(userInfo.id);
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
      <h4>Already have an account?</h4>
    </div>
  );
}
