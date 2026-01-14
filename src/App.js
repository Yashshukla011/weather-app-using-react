import './App.css';
import { useEffect } from 'react';
import Button from "./conponent/button"; // spelling check: component
import Input from "./conponent/input";
import Card from "./conponent/card";
import { useWeather } from "./context/weather";

function App() {
  const weather = useWeather();

  useEffect(() => {
    // Page load hote hi location mangne ke liye
    weather.fetchuserlocation();
  }, []);

  const handleRefresh = () => {
    // Pehle city state ko empty kar sakte hain ya direct location fetch call karein
    weather.setCity(""); 
    weather.fetchuserlocation();
  };

  return (
    <div className="weather-container">
  <h1>Weather Forecast</h1>
  
  <div className="search-box">
    <Input />
    <Button onClick={weather.fetchData} value="Search" />
  </div>

  <Card />

  {/* Refresh button ko card ke niche ek small subtle style mein rakhein */}
  <div className="footer-actions">
    <Button onClick={weather.fetchuserlocation} value="🔄 Update Location" />
  </div>
</div>
  );
}

export default App;