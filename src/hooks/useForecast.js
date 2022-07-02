import {useState, useEffect} from 'react';

const url = `https://api.openweathermap.org/data/2.5/weather?`;
const appid = `APPID=bb2095cd7c9b5e079aa083a46999aba8`;
const units = `units=metric`
export const API=`${url}&${appid}&${units}`;

const useForecast = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitRequest = location => {
            setLoading(true);
            fetch(API + `&q=${location}`)
            .then(response => response.ok)
            .then(response => response.json())
            .then(data => {console.log(data)})
            .then(forecast => {
                setForecast(forecast);
                setLoading(false);
                setError("")
            })
            .catch(error => {
                setError("Nie udało się wczytać miasta");
                setLoading(false);
            },)
    }

    return ({
        error,
        loading,
        forecast,
        submitRequest,
    })
}

export default useForecast;
