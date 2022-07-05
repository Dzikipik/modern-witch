import React from 'react';

const CurrentDay = ({forecast}) => {
    const {date, icon, name, sunrise, sunset, temp, pressure, wind} =  forecast;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    const iconDisplay = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return(
        <>
            <div className='weather-forecast'>
                <img className="weather-forecast-icon" src={iconDisplay}></img>
            </div>

            <div className="weather-forecast-data">
                <div className='weather-forecast-data-left'>
                    Pogoda dla<br />
                    Dane dla godziny<br />
                    Temperatura<br />
                    Wschód słońca<br />
                    Zachód słońca<br />
                    Wiatr<br />
                    Ciśnienie<br />
                </div>

                <div className='weather-forecast-data-right'>
                    {name}<br />
                    {date}<br />
                    {temp}&#176;C<br />
                    {sunriseTime}<br />
                    {sunsetTime}<br />
                    {wind} km/h<br />
                    {pressure} hPa<br />
                </div>




            </div>
        </>
    )

};


export default CurrentDay;
