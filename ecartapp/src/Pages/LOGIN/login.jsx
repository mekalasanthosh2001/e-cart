// src/components/Login.js

import React, { useState } from 'react';
import '../LOGIN/login.css'
const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Here you can add your login logic, e.g., call an authentication API
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <>
    <div className="login-container">
      <h2>SignUp</h2>
      <form onSubmit={handleLogin} className='login-form'>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className=' button '>Sign up</button>
      </form>
    </div>
    </>
  );
};

export default Loginpage;
