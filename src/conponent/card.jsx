import React from "react";
import { useWeather } from "../context/weather";
const Card=()=>{
    const weather =useWeather();
    return (
        <div className="card">
<img  src={weather.weather ? weather.weather.current.condition.icon : ""} alt="weather icon" />
<h2>{weather.weather ? weather.weather.current.temp_c : "Loading..."}</h2>
<h5>{weather.city},{weather.weather ? weather.weather.location.country : ""},{weather.weather ? weather.weather.location.name : ""}</h5>
        </div>
    )
}
export default Card;