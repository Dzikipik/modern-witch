import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../dataBase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import moonIcon from "../icons/moon.png";

export default function Navbar() {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.email);
      } else {
        setUserName("Brak zalogowanego użytkownika");
      }
    });

    return unsubscribe;
  }, []);
  
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
          <div className="navbar-user">
            <Link to="/dashboard/"><img className="icon-small" src={moonIcon} /></Link>
          </div>
          <div className="navbar-nav">
            <Link to="/dashboard/update-profile">Profil</Link>
            <button className="button" onClick={handleLogOut}>Wyloguj</button>
          </div>
        </div>
      </>
    );
}