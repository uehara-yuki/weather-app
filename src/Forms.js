import React from "react";

import "./Forms.css";

export default function Forms() {
  return (
    <div className="Forms">
      <h1 className="h1">
        <form id="search-form">
          <span className="typeCityButton">
            <input
              type="text"
              placeholder=" Type the City"
              autofocus="on"
              autocomplete="off"
              id="type-city"
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
