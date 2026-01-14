import React from "react";
import { useWeather } from "../context/weather";

const Input = () => {
  const weather = useWeather();

  return (
    <div className="input-wrapper">
      <input
        className="input-field"
        placeholder="Enter City Name..."
        value={weather.city}
        onChange={(e) => weather.setCity(e.target.value)}
      />
    </div>
  );
};

export default Input;