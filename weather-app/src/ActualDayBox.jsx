import React, { Component } from "react";
import "./ActualDayBox.css";

class ActualDayBox extends Component {
  render() {
    return (
      <div className="actualDayBox">
        <div className="cityActualBox">GDANSK</div>
        <div className="panelActualBox">
          <div className="imageDivActualBox">
            <div className="imageActualBox" />
          </div>
          <div className="listDivActualBox">
            <div className="listActualBox">
              {" "}
              <ul>
                <li>Temperature: 23 °C</li>
                <li>Pressure: 1040 hPa</li>
                <li>Wind: 9,4 km/h</li>
                <li>Humidity: 78%</li>
                <li>Cloudy: 75%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ActualDayBox;
