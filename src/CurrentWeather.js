import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";



export default function CurrentWeather(props) {
  const [weatherData, setWeatherData]= useState ({ready: false});
  const [city, setCity]= useState (props.defaultCity);
  
  function handleResponse(response){
    console.log(response.data)
    setWeatherData ({
      ready:true,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date (response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,

    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search ();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }
  function search (){
    const apiKey="c25c2e288aa866c69cd6db4b9732a68a";

    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

  }

if (weatherData.ready) {
  return (
    <div className="row">
  
      <div className="col-6">
        Last Uptaded:{" "}
        <div className="date" id="date">
          < FormattedDate date ={weatherData.date} />{" "}
        </div>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="clear"
          id="icon"
          className="icon"
        />
      </div>

      <div className="col-6">
        <div className="weatherDescription" id="weather-description">
          {" "}
          {weatherData.description}{" "}
        </div>
        <div className="humidity" id="humidity">
          Humidity: {weatherData.humidity} %
        </div>
        <div className="wind" id="wind">
          {" "}
          Wind: 5 km/h{" "}
        </div>
      </div>
    </div>
  );
} else {
  search ();
  return 
  "Loading...";
}
}