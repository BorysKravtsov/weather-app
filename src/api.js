import axios from 'axios'

const API_KEY = '31b116020d73478e9ee125930252901'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json'

export async function fetchWeather(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city, // Город, введённый пользователем
        aqi: 'no', // Выключаем Air Quality Index (если не нужен)
      },
    })

    return response.data
  } catch (error) {
    console.error('Ошибка получения погоды:', error)
    return null
  }
}
