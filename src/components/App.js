import React from "react";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import "../scss/index.scss";


function App() {
  return (
    <div className="app">
      <div className="container">
      <Logo />
      <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/dashboard/*" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
      </div>
    </div>
  );
}

export default App;
