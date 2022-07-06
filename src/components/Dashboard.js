import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Navbar from "./Navbar";
import Menu from "./Menu";
import MainContent from "./MainContent";
import MoonPhase from "./MoonPhase";
import Chat from "./chat/Chat";
import Weather from "./weather/Weather";
import NameDay from "./NameDay";
import TarotCard from "./TarotCard";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
          <Menu />
          <div className="main-content">
            <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/nameday" element={<NameDay />} />
                  <Route path="/tarotcard" element={<TarotCard />} />
                  <Route path="/moonphase" element={<MoonPhase />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
          </div>
      </div>
    </div>
  );
}
