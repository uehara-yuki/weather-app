import React, {useState} from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature() {
   const [temperature, setTemperature] = useState ({ready: false});

   function handleResponse(response){
     console.log(response.data);
     setTemperature({
       ready: true,
       temperature: response.data.main.temp,
     })
   }

  if (temperature.ready) {
    return (
    <div className="temperature">
      <div>
        <span id="temperature"> {Math.round(temperature)}</span>
        <a href="/" id="celsius" className="active">
          °C
        </a>
        |
        <a href="/" id="fahrenheit">
          °F
        </a>
      </div>
    </div>
  );


  } else {
      
const apiKey="c25c2e288aa866c69cd6db4b9732a68a";
let city = "New York";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
}
return (
  "Loading..."
);
  }


