const baseUrl="https://api.weatherapi.com/v1/current.json?key=f20b9c6bfcf64b74b57122405251911"
export const getWeatherData=async (city)=>{

const r=await fetch(`${baseUrl}&q=${city}&aqi=yes`)
return await r.json();
}
export const getWeatherDataLocation=async (lat,lon)=>{

const r=await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
return await r.json();
}
export default getWeatherData;