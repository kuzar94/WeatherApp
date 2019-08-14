import React, { Component } from "react";
import "./ActualDayBox.css";
import Moon from "./assets/moon.svg";
import Sun from "./assets/sun.svg";
import Cloud from "./assets/cloud.svg";
import Rain from "./assets/rain.svg";
import Snow from "./assets/snow.svg";
import Haze from "./assets/haze.svg";
import Thunder from "./assets/thunder.svg";
import Blizzard from "./assets/blizzard.svg";

class ActualDayBox extends Component {
  componentWillReceiveProps() {
    if (this.props.actualData === undefined) {
      return undefined;
    } else {
      let conditionState = this.props.actualData.condition.text.toLowerCase();
      if (conditionState.includes("clear")) {
        this.setState({ image: Moon });
      } else if (conditionState.includes("sunny")) {
        this.setState({ image: Sun });
      } else if (
        conditionState.includes("cloudy") ||
        conditionState.includes("overcast")
      ) {
        this.setState({ image: Cloud });
      } else if (conditionState.includes("rain")) {
        this.setState({ image: Rain });
      } else if (
        conditionState.includes("snow") ||
        conditionState.includes("sleet") ||
        conditionState.includes("ice")
      ) {
        this.setState({ image: Snow });
      } else if (
        conditionState.includes("drizzle") ||
        conditionState.includes("mist") ||
        conditionState.includes("fog")
      ) {
        this.setState({ image: Haze });
      } else if (conditionState.includes("thunder")) {
        this.setState({ image: Thunder });
      } else if (conditionState.includes("blizzard")) {
        this.setState({ image: Blizzard });
      }
    }
  }
  state = {
    image: Moon
  };
  makeElementsLi = () => {
    let apiNameData = " ";
    let columns = 0;
    Object.values(this.props.personalizedElements).map((values, key) => {
      if (values.position) {
        columns++;
      }
      return columns;
    });
    if (columns > 8) {
      columns = 3;
    } else if (columns > 4) {
      columns = 2;
    } else columns = 1;
    return (
      <div className={"listActualBox column" + columns}>
        <ul>
          {Object.values(this.props.personalizedElements).map((values, key) => {
            if (values.position) {
              switch (values.name) {
                case "Temperature °C":
                  apiNameData = this.props.actualData.temp_c;
                  break;
                case "Max temperature °C":
                  apiNameData = Math.round(this.props.actualData.temp_c + 3);
                  break;
                case "Min temperature °C":
                  apiNameData = Math.round(this.props.actualData.temp_c - 3);
                  break;
                case "Sensed temperature °C":
                  apiNameData = this.props.actualData.feelslike_c;
                  break;
                case "Condition":
                  apiNameData = this.props.actualData.condition.text;
                  break;
                case "Wind speed km/h":
                  apiNameData = this.props.actualData.wind_kph;
                  break;
                case "Wind degree":
                  apiNameData = this.props.actualData.wind_degree;
                  break;
                case "Pressure hpa":
                  apiNameData = this.props.actualData.pressure_mb;
                  break;
                case "Humidity %":
                  apiNameData = this.props.actualData.humidity;
                  break;
                case "Cloudy":
                  apiNameData = this.props.actualData.cloud;
                  break;
                case "UV":
                  apiNameData = this.props.actualData.uv;
                  break;
                default:
                  apiNameData = "Error";
                  break;
              }
              return (
                <li key={key}>
                  <div className="actualBoxName">{values.name} </div>
                  <div className="actualBoxValue">{apiNameData}</div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  };
  render() {
    if (
      this.props.actualData === undefined ||
      this.props.cityName === undefined
    ) {
      return <div className="noData">No data, wait or try again later</div>;
    } else {
      let imageType = {
        backgroundImage: `url(${this.state.image})`
      };
      return (
        <div className="actualDayBox">
          <div className="cityActualBox">
            <input type="text" name="name" value={this.props.cityName.name} />
          </div>
          <div className="panelActualBox">
            <div className="imageDivActualBox">
              <div className="imageActualBox" style={imageType} />
            </div>
            <div className="listDivActualBox">{this.makeElementsLi()}</div>
          </div>
        </div>
      );
    }
  }
}
export default ActualDayBox;
