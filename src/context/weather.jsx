import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataLocation } from "../api";
import React from "react";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchData = async () => {
    if (!city) return;
    setWeather(null); // Pehle purana data clear karein (Loading dikhane ke liye)
    const response = await getWeatherData(city);
    setWeather(response);
  };

  const fetchuserlocation = () => {
    setWeather(null); // State clear karein
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherDataLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((response) => {
          setWeather(response);
          setCity(""); // Refresh ke baad input box khali kar dein
        });
      },
      (error) => {
        console.error("Location Error:", error);
        alert("Please enable location access");
      }
    );
  };

  return (
    <WeatherContext.Provider 
      value={{ city, weather, fetchData, setCity, fetchuserlocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;