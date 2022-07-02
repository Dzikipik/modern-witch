import React, { useState, useEffect } from "react";
import FormCity from "./FormCity";
import Result from "./Result";
import Loader from "./Loader";
import useForecast from '../../hooks/useForecast'
import { API } from "../../hooks/useForecast";


const Weather = () => {
    const {error, loading, forecast, submitRequest} = useForecast(API);


  const onSubmit = (value) => {
    submitRequest(value);
    console.log({value})
  }


    return (
        <div className="weather">
            {!loading && <FormCity submitSearch={onSubmit}/>}
            {forecast && <Result />}
            {loading && <Loader />}
            {error && <div className="error">{error}</div>}
        </div>
    );
  }

  export default Weather;

