import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

export default function Weather() {
    return (
        <div className="weather">POGODA</div>
    );
  }



