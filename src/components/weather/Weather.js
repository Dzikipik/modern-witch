import React, { useState, useEffect } from "react";
import CurrentDay from "./CurrentDay";
import Forecast from "./Forecast";
import Loader from "./Loader";

const WeatherIcons = {
  "01d": "./icons/sunny.svg",
  "01n": "./icons/night.svg",
  "02d": "./icons/day.svg",
  "02n": "./icons/cloudy-night.svg",
  "03d": "./icons/cloudy.svg",
  "03n": "./icons/cloudy.svg",
  "04d": "./icons/perfect-day.svg",
  "04n": "./icons/cloudy-night.svg",
  "09d": "./icons/rain.svg",
  "09n": "./icons/rain-night.svg",
  "10d": "./icons/rain.svg",
  "10n": "./icons/rain-night.svg",
  "11d": "./icons/storm.svg",
  "11n": "./icons/storm.svg",
};


const Weather = () => {
  const [data, setData] = useState({
    date: "",
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
        name: data.name, 
        sunrise: data.sys.sunrise, 
        sunset: data.sys.sunset,
        temp: data.main.temp, 
        pressure: data.main.pressure, 
        wind: data.wind.speed,
        err: true
      })
      setError(false);
      setLoading(false)
    })
    .catch(err => {
      setError(true);
      setLoading(false);
  })
  }
  
    return (
        <div className="weather">
          <form className="weather-form" onSubmit={searchLocation}>
            <label>
                <input 
                  type="text" 
                  required placeholder="Wyszukaj miasto" 
                  value={location}
                  onChange={e => setLocation(e.target.value)}/>
            </label>
            <button type="submit" className="button" onClick={searchLocation}>Wyszukaj miasto</button>
          </form>
          {loading && <Loader />}
          {error && <div className="error">Miasto nie istnieje</div>}
          <div className="weather-data">
            {data.name.length === 0 || error ? null : <CurrentDay forecast={data}/>}
          </div>
          
        </div>
    );
  }

  export default Weather;
