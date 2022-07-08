import React, { useState, useEffect } from "react";
import CurrentDay from "./CurrentDay";
import Loader from "./Loader";

const Weather = () => {
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
        <div className="weather">
          <div className="header">
                <h2>Pogoda</h2>
            </div>
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
