import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Aside() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();
    const navigate = useNavigate();
  
    return (
      <div className="aside">
        <div>menu</div>
        <div>menu</div>
        <div>menu</div>
        <div>menu</div>
      </div>
    );
  }