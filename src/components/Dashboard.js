import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Aside from "./Aside";


export default function Dashboard() {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="container-app">
      <Navbar />
      <Aside />
      {error && <div className="error">{error}</div>}
      <div className="content">Witaj {userName}</div>
    </div>
  );
}
