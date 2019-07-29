import React, { Component } from "react";
import "./DayBox.css";

class DayBox extends Component {
  render() {
    return (
      <div className="weatherBox">
        <div className="weekDayBox">MONDAY</div>
        <div className="imageBox" />
        <div className="listDataBox">
          <ul>
            <li>Temperature: 23 °C</li>
            <li>Pressure: 1040 hPa</li>
            <li>Wind: 9,4 km/h</li>
            <li>Humidity: 78%</li>
            <li>Cloudy: 75%</li>
          </ul>
        </div>
        <div className="icons">
          <div className="icon">
            <div className="iconNr1Image iconWheather" />
            <div className="iconText">23</div>
          </div>
          <div className="icon">
            <div className="iconNr2Image iconWheather" />
            <div className="iconText">9,4</div>
          </div>
          <div className="icon">
            <div className="iconNr3Image iconWheather" />
            <div className="iconText">78</div>
          </div>
        </div>

        <div className="dataDayBox">27/07/2019</div>
      </div>
    );
  }
}
export default DayBox;
