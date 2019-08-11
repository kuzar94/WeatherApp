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
            {Object.values(this.props.menuData.personalizedElements).map(
              (values, key) => {
                if (
                  values.name === "Max temperature °C" ||
                  values.name === "Min temperature °C" ||
                  values.name === "Cloudy"
                ) {
                  return (
                    <li key={key}>
                      <div className="dayBoxName">{values.name}</div>
                      <div className="dayBoxValue">40%</div>
                    </li>
                  );
                }
              }
            )}
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
