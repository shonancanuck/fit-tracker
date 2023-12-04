import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const { setUserId, username, setUsername, setLoggedIn } =
    useContext(UserContext);

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
      const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (response.ok) {
        console.log('Registration successful!');
        const userInfo = await response.json();
        console.log(userInfo);
        setUserId(userInfo.id);
        setUsername(userInfo.username);
        setLoggedIn(true);
        navigate('/');
      } else {
        console.log(response);
        console.log('Registration unsuccessful');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-box">
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
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
