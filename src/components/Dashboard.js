import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Welcome from "./Welcome";
import MoonPhase from "./MoonPhase";
import Chat from "./chat/Chat";
import Weather from "./weather/Weather";
import NameDay from "./NameDay";
import TarotCard from "./tarot/TarotCard";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Menu />
      
            <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/nameday" element={<NameDay />} />
                  <Route path="/tarotcard" element={<TarotCard />} />
                  <Route path="/moonphase" element={<MoonPhase />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>


    </div>
  );
}
