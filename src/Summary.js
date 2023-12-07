import React from "react";
import "./Summary.css";

export default function Summary() {
  return (
    <div className="current-weather-summary">
      <div>
        <p>Cloudy</p>
        <p>humidity: 50%</p>
        <p>wind speed: 13 km/h</p>
      </div>
    </div>
  );
}
