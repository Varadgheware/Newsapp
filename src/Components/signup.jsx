import React, { useState } from 'react'
import axios from "axios"
import "./signup.css"
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlebutton = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", {
      name,
      password,
      email
    })
      .then(result => {
        alert("User Registered Successfully!");
        navigate('/login');
      })
      .catch(error => {
        alert("Registration failed!");
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2 style={{ textAlign: 'center', fontWeight: 700, color: '#6366f1', marginBottom: '1rem', letterSpacing: '1px' }}>Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handlebutton} style={{marginTop: '0.5rem'}}>Register</button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  )
}

export default Signup
