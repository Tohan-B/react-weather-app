import React from "react";

function WeatherDetails() {
  return (
    <div>
      <h1 id="city"></h1>
      <ul>
        <li id="date"></li>
        <li id="description"></li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-temperature">
            <div class="float-left">
              <img src="" alt="Clear" id="icon" class="float-left" />
              <span class="temperature">
                <strong id="temperature"></strong>
              </span>
              <span class="units">
                <a href="" id="celcius-link" class="active">
                  {" "}
                  °C{" "}
                </a>
                /
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>
              <span class="writeup-color">%</span>
            </li>
            <li>
              Wind: <span id="wind"></span>
              <span class="writeup-color"> km/h</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}

export default WeatherDetails;
