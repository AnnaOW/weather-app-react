import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9a4cbff04f4e654ca4teaa03bc88aoaf";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="find-your-city-search w-50 p-3"
            type="text"
            name="city"
            required
            placeholder="Type your city here"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            className="btn btn-primary btn-lg search-city-button"
            data-bs-toggle="button"
            autoComplete="off"
            value="Search"
          />
        </form>

        {<WeatherInfo data={weatherData} />}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
