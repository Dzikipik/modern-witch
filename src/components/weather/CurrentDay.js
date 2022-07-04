import React from 'react';

const CurrentDay = ({forecast}) => {
    const {date, name, sunrise, sunset, temp, pressure, wind, err} =  forecast;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    return(
        <>
            <div>Dane dla godziny: {date}</div>
            <div>Pogoda dla: {name}</div>
            <div>Temperatura: {temp} &#176;C</div>
            <div>Wschód słońca: {sunriseTime}</div>
            <div>Zachód słońca: {sunsetTime}</div>
            <div>Wiatr: {wind}</div>
            <div>Ciśnienie: {pressure} hPa</div>
        </>
    )

};


export default CurrentDay;
