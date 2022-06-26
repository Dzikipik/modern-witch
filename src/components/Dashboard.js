import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

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
      setError("Failed to logout");
    }
  }
  return (
    <div className="container">
      <Navbar />
      <div className="content">dalsza tresc</div>
    </div>
  );
}
