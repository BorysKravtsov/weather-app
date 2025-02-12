import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchWeather } from './api'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState(null)

  const handleSearch = async (city) => {
    const data = await fetchWeather(city)
    if (data) setWeather(data)
  }

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
