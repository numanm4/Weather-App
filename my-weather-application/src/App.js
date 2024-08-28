import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const fetchWeather = async (latitude, longitude) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const data = await response.json();
    setWeatherData(data.current_weather);
  };

  const fetchCoordinates = async () => {
    const apiKey = 'add your api key'; 
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`);
    const data = await response.json();
    console.log(data);
  
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      fetchWeather(lat, lng);
    } else {
      alert("City not found!");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCoordinates();
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name" 
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <WeatherDisplay weather={weatherData} />
      )}
    </div>
  );
}

export default App;
