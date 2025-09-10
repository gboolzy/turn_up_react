import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Login from './features/auth/pages/Login.tsx';
import SignUp from "./features/auth/pages/Signup.tsx";
import Dashboard from "./features/dashboard/pages/Dashboard.tsx";
import Profile from "./features/pages/Profile.tsx";
import About from "./features/pages/About.tsx";
import Layout from "./features/pages/Layout.tsx";
function App() {


  return (
 
    <Router basename="/turn_up_react">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
