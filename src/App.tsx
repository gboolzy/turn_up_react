import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Login from './features/auth/pages/Login.tsx';
import SignUp from "./features/auth/pages/Signup.tsx";
import Dashboard from "./features/dashboard/pages/Dashboard.tsx";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
