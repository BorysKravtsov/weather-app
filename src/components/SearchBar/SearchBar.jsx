import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city)
      setCity('')
    }
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchBar
