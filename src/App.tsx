import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Login from './features/auth/pages/Login.tsx';
import SignUp from "./features/auth/pages/Signup.tsx";
import Dashboard from "./features/dashboard/pages/Dashboard.tsx";
import Profile from "./features/pages/Profile.tsx";
import About from "./features/pages/About.tsx";
import Layout from "./features/pages/Layout.tsx";
import CardGame from "./features/pages/games/CardGame.tsx";
import SnakeGame from "./features/pages/practice/SnakeGame.tsx";
import NumberGuessingGame from "./features/pages/practice/NumberGessingGame.tsx";
import HangmanGame from "./features/pages/practice/HangManGame.tsx";
import Hangman from "./features/pages/games/Hangman.tsx";
import WhackAMole from "./features/pages/practice/WckAMoleGame.tsx";
function App() {


  return (
 
    <Router basename="/turn_up_react">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/game" element={<SnakeGame />} />
        <Route path="/games/card-game" element={<CardGame />} />
        <Route path="/games/hangman" element={<Hangman />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
