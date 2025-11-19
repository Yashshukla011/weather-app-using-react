import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Button from "./conponent/button"
import Input from "./conponent/input"
import Card from "./conponent/card"
import {useWeather} from "./context/weather"
function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(()=>{
weather.fetchuserlocation();
  },[])
  return (
    <div className="App">
      
      <h1>Weather forest</h1>
      <Input />
      <Button onClick={weather.fetchData} value="search" />
      <Card />
       <Button value="Refresh" />
      
    </div>
  );
}

export default App;
