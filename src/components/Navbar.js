import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import moonIcon from "../icons/moon.png"

export default function Navbar() {
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
      <>
        <div className="navbar">
        <img className="icon" src={moonIcon} />
          {error && <div className="error">{error}</div>}
          <h2>Email:</h2> <p>{currentUser.email}</p>
          <Link to="/update-profile" className="button">Zaktualizuj profil</Link>
          <button className="button" onClick={handleLogOut}>Wyloguj</button>
        </div>
      </>
    );
}