import React, {useState} from "react";

import "./Forms.css";

function handleSubmit(event){
  event.preventDefault();
}

function handleCityChange(event){
 setCity(event.target.value);
}

export default function Forms() {

const [weatherData, setWeatherData]= useState ({ready: false});
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

      <h2 className="city" id="city">
        Hamburg
      </h2>
    </div>
  );
}
