import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import moonIcon from "../icons/moon.png"

export default function Navbar() {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  
    async function handleLogOut() {
      setError("");
      try {
        await logout();
        navigate("/");
      } catch {
        setError("Nie udało się wylogować");
      }
    }
    return (
      <>
        <div className="navbar">
        <img className="icon-small" src={moonIcon} />
          {error && <div className="error">{error}</div>}
          <h2>{userName}</h2>
          <Link to="/update-profile">Zaktualizuj profil</Link>
          <button className="button" onClick={handleLogOut}>Wyloguj</button>
        </div>
      </>
    );
}