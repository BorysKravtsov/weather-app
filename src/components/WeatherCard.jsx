function WeatherCard({ weather }) {
  return (
    <div className="weather-info">
      <h2>
        {weather.location.name}, {weather.location.country}
      </h2>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Weather conditions: {weather.current.condition.text}</p>
      <p>Wind: {weather.current.wind_kph} km/h</p>
      <img src={weather.current.condition.icon} alt="Weather icon" />
    </div>
  )
}

export default WeatherCard
