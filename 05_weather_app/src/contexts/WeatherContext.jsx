import React, { createContext, useEffect, useState } from 'react'


export const WeatherContext = createContext('')


export function WeatherContextProvider({children}) {
  
  const [getLocation, setGetLocation] = useState()
  const [weatherData, setWeatherData] = useState([])

  const apiKey = '';

  useEffect(() => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${getLocation}&aqi=yes`;
    
  
    async function getData() {
      try {
        const response = await fetch(URL);  
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (getLocation) {      
      getData();
    }
  }, [getLocation]);
  


  return (
    <WeatherContext.Provider value={{weatherData, setGetLocation}}>
      {children}
    </WeatherContext.Provider>
  )
}