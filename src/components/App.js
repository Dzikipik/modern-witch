import React from "react";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { auth } from "../dataBase/firebase";
import ForgotPassword from "./ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../scss/index.scss";


function App() {

  return (
    <div className="app">
      
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route exact path="/dashboard/*" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>

    </div>
  );
}

export default App;
