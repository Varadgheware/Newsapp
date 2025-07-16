import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.js";

dotenv.config();

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await User.create({ name, email, password});
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log("Login attempt:", { email, password });
    console.log("User found:", user);
    if (user) {
      if (user.password.trim() === password.trim()) {
        res.json("success");
      } else {
        res.json("Invalid credentials");
      }
    } else {
      res.json("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error from login" });
  }
});
app.get('/register', (req, res) => {
  res.send('Register endpoint is working Use POST to register.');
});
app.get('/login', (req, res) => {
  res.send('Register endpoint is working Use POST to register.');
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
