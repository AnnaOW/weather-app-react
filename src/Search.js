import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [ready, setReady] = useState("false");
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form>
          <input
            className="find-your-city-search w-50 p-3"
            type="text"
            name="city"
            required
            placeholder="Type your city here"
            autoComplete="off"
            autoFocus="on"
          />
          <input
            type="submit"
            className="btn btn-primary btn-lg search-city-button"
            data-bs-toggle="button"
            autoComplete="off"
            value="Search"
          />
        </form>

        <div className="current-temperature">
          <h5>{Math.round(temperature)}</h5>
          <h6>°C | °F</h6>
        </div>
      </div>
    );
  } else {
    const apiKey = "9a4cbff04f4e654ca4teaa03bc88aoaf";
    let city = "New York";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
