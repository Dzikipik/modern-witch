import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

const TarotCard = () => {
    const [data, setData] = useState({
       
      });
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);
    
      const TAROTAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10`;
      
      const getTarotCard = (e) => {
        e.preventDefault();
        fetch(TAROTAPI)
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
        })
        .catch(err => {
          setError(true);
          setLoading(false);
      })
      }
    return (
        <div className="tarotcard">
            <div className="tarot">{data}</div>
            <div className="card"></div>
        </div>
    );
  }

  export default TarotCard;
