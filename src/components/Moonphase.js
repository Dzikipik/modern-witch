import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

export default function MoonPhase() {
    return (
      <div className="content">
        <div className="main-content">Księżyc</div>
      </div>
    );
  }
