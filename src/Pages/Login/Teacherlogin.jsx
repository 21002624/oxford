import React, { useState } from 'react';
import './ParentLogin.css'; 

const TeacherLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="loginContainer">
      <h2>Teacher Login</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="loginInput"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default TeacherLogin;
