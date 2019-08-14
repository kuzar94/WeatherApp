import React, { Component } from "react";
import "./DayBox.css";
import Moon from "./assets/moon.svg";
import Sun from "./assets/sun.svg";
import Cloud from "./assets/cloud.svg";
import Rain from "./assets/rain.svg";
import Snow from "./assets/snow.svg";
import Haze from "./assets/haze.svg";
import Thunder from "./assets/thunder.svg";
import Blizzard from "./assets/blizzard.svg";
import Drizzle from "./assets/drizzle.svg";
class DayBox extends Component {
  state = {
    image: undefined
  };
  componentWillReceiveProps() {
    if (this.props.forecastData === undefined) {
      return undefined;
    } else {
      let conditionState = this.props.forecastData.day.condition.text.toLowerCase();
      if (conditionState.includes("clear")) {
        this.setState({ image: Moon }, function() {});
      } else if (conditionState.includes("sunny")) {
        this.setState({ image: Sun }, function() {});
      } else if (
        conditionState.includes("cloudy") ||
        conditionState.includes("overcast")
      ) {
        this.setState({ image: Cloud }, function() {});
      } else if (conditionState.includes("rain")) {
        this.setState({ image: Rain }, function() {});
      } else if (
        conditionState.includes("snow") ||
        conditionState.includes("sleet") ||
        conditionState.includes("ice")
      ) {
        this.setState({ image: Snow }, function() {});
      } else if (conditionState.includes("drizzle")) {
        this.setState({ image: Drizzle }, function() {});
      } else if (
        conditionState.includes("mist") ||
        conditionState.includes("fog")
      ) {
        this.setState({ image: Haze }, function() {});
      } else if (conditionState.includes("thunder")) {
        this.setState({ image: Thunder }, function() {});
      } else if (conditionState.includes("blizzard")) {
        this.setState({ image: Blizzard }, function() {});
      }
    }
  }

  getDayName = (dateStr, locale) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  render() {
    let imageType = {
      backgroundImage: `url(${this.state.image})`
    };
    return (
      <div className="weatherBox">
        <div className="weekDayBox">
          {this.getDayName(this.props.forecastData.date, "en-US")}
        </div>
        <div className="imageBox" style={imageType} />
        <div className="listDataBox">
          <ul>
            <li>
              <div className="dayBoxName">Max temperature °C</div>
              <div className="dayBoxValue">
                {this.props.forecastData.day.maxtemp_c}
              </div>
            </li>
            <li>
              <div className="dayBoxName">Min temperature °C</div>
              <div className="dayBoxValue">
                {this.props.forecastData.day.mintemp_c}
              </div>
            </li>
            <li>
              <div className="dayBoxName">Cloudy</div>
              <div className="dayBoxValue">
                {this.props.forecastData.day.avghumidity}
              </div>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="icon">
            <div className="iconNr1Image iconWheather" />
            <div className="iconText">
              {this.props.forecastData.day.avgtemp_c}
            </div>
          </div>
          <div className="icon">
            <div className="iconNr2Image iconWheather" />
            <div className="iconText">
              {this.props.forecastData.day.maxwind_kph}
            </div>
          </div>
          <div className="icon">
            <div className="iconNr3Image iconWheather" />
            <div className="iconText">
              {this.props.forecastData.day.avghumidity}
            </div>
          </div>
        </div>

        <div className="dataDayBox">{this.props.forecastData.date}</div>
      </div>
    );
  }
}
export default DayBox;
