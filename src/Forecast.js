import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row" id="forecast">
      <div className="col">
        <h3>12:00</h3>
        <strong> 1°C </strong>/ -1°C
        <img
          alt="weatherIcon"
          className="forecast w-100"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          
        />
      </div>

      <div className="col">
        <h3>12:00</h3>
        <strong> 1°C </strong>/ -2°C
        <img
          alt="weatherIcon"
          className="forecast w-100"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          
        />
      </div>

      <div className="col">
        <h3>12:00</h3>
        <strong> 1°C </strong>/ -3°C
        <img
          alt="weatherIcon"
          className="w-100"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          
        />
      </div>
      <div className="col">
        <h3>12:00</h3>
        <strong> 1°C </strong>/ -4°C
        <img
          alt="weatherIcon"
          className="forecast w-100"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          
        />
      </div>
      <div className="col">
        <h3>12:00</h3>
        <strong> 1°C </strong>/ -5°C
        <img
          alt="weatherIcon"
          className="forecast w-100"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          
        />
      </div>
    </div>
  );
}