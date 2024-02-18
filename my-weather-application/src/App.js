// App.js
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import './App.css';


const App = () => {
  const [locations] = useState([
    { "city": "New York", "temperature": "22°C", "weather": "Sunny" },
    { "city": "Los Angeles", "temperature": "25°C", "weather": "Cloudy" },
    { "city": "Chicago", "temperature": "15°C", "weather": "Rainy" },
    { "city": "Houston", "temperature": "30°C", "weather": "Sunny" },
    { "city": "Phoenix", "temperature": "35°C", "weather": "Sunny" },
    { "city": "Philadelphia", "temperature": "20°C", "weather": "Cloudy" },
    { "city": "San Antonio", "temperature": "28°C", "weather": "Sunny" },
    { "city": "San Diego", "temperature": "23°C", "weather": "Sunny" },
    { "city": "Dallas", "temperature": "30°C", "weather": "Sunny" },
    { "city": "San Jose", "temperature": "22°C", "weather": "Cloudy" },
    { "city": "Austin", "temperature": "28°C", "weather": "Sunny" },
    { "city": "Jacksonville", "temperature": "27°C", "weather": "Sunny" },
    { "city": "Fort Worth", "temperature": "29°C", "weather": "Cloudy" },
    { "city": "Columbus", "temperature": "20°C", "weather": "Rainy" },
    { "city": "Charlotte", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "San Francisco", "temperature": "18°C", "weather": "Cloudy" },
    { "city": "Indianapolis", "temperature": "22°C", "weather": "Cloudy" },
    { "city": "Seattle", "temperature": "15°C", "weather": "Rainy" },
    { "city": "Denver", "temperature": "22°C", "weather": "Cloudy" },
    { "city": "Washington", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "Boston", "temperature": "20°C", "weather": "Rainy" },
    { "city": "El Paso", "temperature": "30°C", "weather": "Sunny" },
    { "city": "Nashville", "temperature": "26°C", "weather": "Cloudy" },
    { "city": "Detroit", "temperature": "19°C", "weather": "Cloudy" },
    { "city": "Oklahoma City", "temperature": "28°C", "weather": "Sunny" },
    { "city": "Portland", "temperature": "20°C", "weather": "Rainy" },
    { "city": "Las Vegas", "temperature": "34°C", "weather": "Sunny" },
    { "city": "Memphis", "temperature": "27°C", "weather": "Sunny" },
    { "city": "Louisville", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "Baltimore", "temperature": "22°C", "weather": "Cloudy" },
    { "city": "Milwaukee", "temperature": "18°C", "weather": "Cloudy" },
    { "city": "Albuquerque", "temperature": "25°C", "weather": "Sunny" },
    { "city": "Tucson", "temperature": "33°C", "weather": "Sunny" },
    { "city": "Fresno", "temperature": "30°C", "weather": "Sunny" },
    { "city": "Sacramento", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "Kansas City", "temperature": "25°C", "weather": "Cloudy" },
    { "city": "Long Beach", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "Mesa", "temperature": "32°C", "weather": "Sunny" },
    { "city": "Atlanta", "temperature": "26°C", "weather": "Cloudy" },
    { "city": "Colorado Springs", "temperature": "20°C", "weather": "Cloudy" },
    { "city": "Virginia Beach", "temperature": "25°C", "weather": "Cloudy" },
    { "city": "Raleigh", "temperature": "24°C", "weather": "Cloudy" },
    { "city": "Omaha", "temperature": "23°C", "weather": "Cloudy" },
    { "city": "Miami", "temperature": "30°C", "weather": "Sunny" },
    { "city": "Oakland", "temperature": "22°C", "weather": "Cloudy" },
    { "city": "Minneapolis", "temperature": "20°C", "weather": "Cloudy" },
    { "city": "Tulsa", "temperature": "27°C", "weather": "Cloudy" },
    { "city": "Wichita", "temperature": "25°C", "weather": "Sunny" },
    { "city": "New Orleans", "temperature": "29°C", "weather": "Sunny" },
    { "city": "Arlington", "temperature": "28°C", "weather": "Cloudy" }
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered locations based on search query
  const filteredLocations = locations.filter(location =>
    location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {/* Container for WeatherDisplay components */}
      <div className="weather-display-container">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <WeatherDisplay key={index} location={location} />
          ))
        ) : (
          <p>No locations found</p>
        )}
      </div>
    </div>
  );
};

export default App;