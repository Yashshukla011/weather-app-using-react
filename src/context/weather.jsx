import { createContext, useContext, useState } from "react";
import { getWeatherData,getWeatherDataLocation } from "../api";
import React from "react";

const WeatherContext = createContext();

export const useWeather = () => {
  return React.useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchData = async () => {
    if (!city) return;
    const response = await getWeatherData(city);
    setWeather(response);
  };
  const fetchuserlocation=()=>{
    navigator.geolocation.getCurrentPosition((position) => {
     getWeatherDataLocation(position.coords.latitude, position.coords.longitude).then(response => {
       setWeather(response);
     });
    });
  }

  return (
    <WeatherContext.Provider value={{ city, weather, fetchData, setCity, fetchuserlocation }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
