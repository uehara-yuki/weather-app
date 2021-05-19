import React, {useState} from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

import "./Forms.css";


function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
 setCity(event.target.value);
}

function search(){
  const apiKey="c25c2e288aa866c69cd6db4b9732a68a";

  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
}

export default function handleResponse(props) {

  const [city, setCity]= useState (props.defaultCity);

  return (
    <div className="Forms">
      <h1 className="h1">
        <form onSubmit= {handleSubmit} id="search-form">
          <span className="typeCityButton">
            <input
              type="text"
              placeholder=" Type the City"
              autofocus="on"
              autocomplete="off"
              id="type-city"
              onChange={handleCityChange}
            />
          </span>
          <span className="searchButton">
            <input
              type="submit"
              value="Search"
              id="search-button"
              className="btn btn-warning"
            />
          </span>
          <span className="currentButton">
            <input
              type="submit"
              value="Your Location"
              id="current-button"
              className="btn btn-warning"
            />
          </span>
        </form>
      </h1>
      <br />

      <h2 className="cityName" id="cityName">
        Hamburg
      </h2>
    </div>
  );
}
