import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import Navboard from './Components/Navboard';
import Signup from './Components/signup';
import Login from './Components/Login';

function Home() {
  const [categeory, setCategeory] = useState("general");
  return (
    <>
      <Navbar setCategeory={setCategeory} />
      <Navboard categeory={categeory} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
