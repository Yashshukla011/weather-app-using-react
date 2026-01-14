import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
      {weather.weather ? (
        <>
          <img 
            src={weather.weather.current.condition.icon} 
            alt="weather icon" 
          />
          <h2>{weather.weather.current.temp_c}°</h2>
          <h5>{weather.weather.location.name}</h5>
          <p>{weather.weather.location.region}, {weather.weather.location.country}</p>
        </>
      ) : (
        <p style={{fontStyle: 'italic', color: '#64748b'}}>Wait, fetching weather data...</p>
      )}
    </div>
  );
};

export default Card;