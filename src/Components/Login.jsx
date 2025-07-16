import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/login", { email, password })
      .then(result => {
        if (result.data === "success") {
          navigate('/home');
        } else {
          alert("Invalid credentials");
        }
      })
      .catch(() => {
        alert("Login failed!");
      });
  };

  return (
    <div className="login-center-wrapper">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"cd 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
}

export default Login;