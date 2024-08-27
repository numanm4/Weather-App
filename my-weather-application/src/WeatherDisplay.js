import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>Weather Details</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
