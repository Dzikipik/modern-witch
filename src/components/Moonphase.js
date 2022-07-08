import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

const MoonPhase = () => {
    const [data, setData] = useState({
        value: "",
        date: "",
        icon: "",
        name: "", 
        sunrise: "", 
        sunset: "",
        temp: "", 
        pressure: "", 
        wind: "",
      });
      const [location, setLocation] = useState("");
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bb2095cd7c9b5e079aa083a46999aba8&units=metric`;
      
      const searchLocation = (e) => {
        e.preventDefault();
        fetch(url)
        .then(response =>{
          if(response.ok){
            return response
          }
          setLoading(false);
          setError(false)
         
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          setData({
            date: time,
            icon:data.weather[0].icon,
            name: data.name, 
            sunrise: data.sys.sunrise, 
            sunset: data.sys.sunset,
            temp: data.main.temp, 
            pressure: data.main.pressure, 
            wind: data.wind.speed,
          })
          setError(false);
          setLoading(false);
          setLocation("")
        })
        .catch(err => {
          setError(true);
          setLoading(false);
      })
      }
    return (
        <div className="moonphase">
            <div className="moon">Księżyc</div>
        </div>
    );
  }

  export default MoonPhase;
