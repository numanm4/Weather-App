// WeatherDisplay.js
import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ location }) => {
  return (
    <div className="weather-display">
      <h2>{location.city}</h2>
      <p>Weather: {location.weather}</p>
      <p>Temperature: {location.temperature}</p>
    </div>
  );
};

export default WeatherDisplay;
