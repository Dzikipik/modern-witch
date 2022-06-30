import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

export default function Comunicator() {
    return (
        <div className="main-content">Komunikator</div>
    );
  }
