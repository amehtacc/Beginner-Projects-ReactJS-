import React, {useContext, useEffect} from 'react'
import { WeatherContext } from '../contexts/index'

function WeatherInfo() {
    const {weatherData} = useContext(WeatherContext)    
// console.log(weatherData);

    function getDay() {
        const newDate = new Date()
        const day = newDate.getDay() 
    
        const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const currDay = weekDays[day]
    
        return currDay 
    }

    function getDate() {
        const newDate = new Date()
        const date = newDate.getDate()
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[newDate.getMonth()]
        
        const year = newDate.getFullYear()

        return `${date} ${month}, ${year}`   
    }   
    
  return (
    <div className='flex justify-center mt-5 text-white'>
            <div className='w-96 h-64 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 transition-all flex flex-col items-center p-5'>
            <p className='text-2xl font-bold mb-2'>{getDay()}</p>
            <p  className='font-bold text-sm mb-3'>{getDate()}</p>
            <div className='flex items-center gap-1 text-xs font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-4'>
                <path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>                
                <p>{`${weatherData?.location?.name}, ${weatherData?.location?.region}, ${weatherData?.location?.country}`}</p>
            </div>
            <p className='my-7 text-5xl font-bold'>{Math.floor(weatherData?.current?.temp_c)}<sup>o</sup>C</p>
            <div className='w-full flex font-semibold'>
                <div className='w-1/2 flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-4'>
                    <path fill="#ffffff" d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>
                    <p>{weatherData?.current?.wind_kph} km/h</p>
                </div>
                <div className='w-1/2 flex justify-end items-center gap-1'>
                    <img src=".\src\assets\humidity.png" alt="" className='h-4'/>
                    <p>{weatherData?.current?.humidity}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo