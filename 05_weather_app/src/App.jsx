import React, { useContext } from 'react'
import InputForm from './components/InputForm'
import WeatherInfo from './components/WeatherInfo'
import { WeatherContext } from './contexts/index'

function App() {
  const {weatherData} = useContext(WeatherContext)
  // console.log(weatherData);
  

  return (
    <div className="flex flex-col items-center gap-5 w-full h-screen p-10">
      <h1 className='font-bold text-4xl mb-10'>Check your current Weather condition</h1>
      <div className=''>
        <InputForm />
      </div>
      {weatherData && weatherData.current && <WeatherInfo/>}
    </div>
  )
}

export default App