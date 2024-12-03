import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherDisplay({ city, unit }) {
  console.log(city);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const API_KEY = "c33afd3bd3eada4b9c50478522875e2a";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&units=${unit}&appid=${API_KEY}`
      );
      setForecast(response.data.list.slice(0, 5));
    };
    fetchForecast();
  }, [city, unit]);
  const  tempC = city.main.temp; 
  const tempF =(city.main.temp * 9/5 + 32).toFixed(2);

  return (
    <div className="weather-display">
      <h2>Current Weather in {city.name}</h2>
      <p>Temperature: {unit === "metric" ? tempC+"°C" : tempF+"°F"}</p>
      <p>Condition: {city.weather[0].description}</p>

      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt_txt).toDateString()}</p>
            <p>Temp: {day.main.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
