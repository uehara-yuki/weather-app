import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Forms from "./Forms";
import Temperature from "./Temperature";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <Header />
      <Forms />
      <Temperature />
      <CurrentWeather defaultCity="New York"/>
      <Forecast />
      <Footer />
    </div>
  </StrictMode>,
  rootElement
);