import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Aside from "./Aside";


export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Nie udało się zalogować");
    }
  }
  return (
    <div className="container-app">
      <Navbar />
      <Aside />
      {error && <div className="error">{error}</div>}
      <div className="content">Witaj {currentUser.email}</div>
    </div>
  );
}
