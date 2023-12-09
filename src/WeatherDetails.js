import React from "react";

function WeatherDetails() {
  return (
    <div>
      <h1 id="city">Paris</h1>
      <ul>
        <li id="date"></li>
        <li id="description"></li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <img src="" alt="Clear" id="icon" className="float-left" />
              <span className="temperature">
                <strong id="temperature">12</strong>
              </span>
              <span className="units">
                <a href="" id="celcius-link" className="active">
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

        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>
              <span className="writeup-color">%</span>
            </li>
            <li>
              Wind: <span id="wind"></span>
              <span className="writeup-color"> km/h</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}

export default WeatherDetails;
