import React, { Component } from "react";
import ActualDayBox from "./ActualDayBox";
import BurgerMenu from "./BurgerMenu";
import "./App.css";
import Gallery from "./Gallery";

const API_KEY = "b4a3127ec4104f91b38103456192707";

class App extends Component {
  componentDidMount() {
    this.getWeather();
  }

  state = {
    personalizedElements: {
      a0: {
        name: "Temperature °C",
        position: true
      },
      a1: {
        name: "Max temperature °C",
        position: true
      },
      a2: {
        name: "Min temperature °C",
        position: true
      },
      a3: {
        name: "Sensed temperature °C",
        position: true
      },
      a4: {
        name: "Condition",
        position: true
      },
      a5: {
        name: "Wind speed km/h",
        position: false
      },
      a6: {
        name: "Wind degree",
        position: false
      },
      a7: {
        name: "Pressure hpa",
        position: false
      },
      a8: {
        name: "Humidity %",
        position: false
      },
      a9: {
        name: "Cloudy",
        position: false
      },
      a10: {
        name: "UV",
        position: false
      }
    },
    city: "Gdansk",
    actualData: undefined,
    forecastData: undefined,
    cityData: "undefined"
  };
  changeCity = changedCity => {
    this.setState({ city: changedCity });
  };
  changePositionPersonalizeMenu = (
    valuePersonalizedElement,
    nrPersonalizedElement
  ) => {
    const changedPositionPersonalizeMenu = this.state.personalizedElements;
    if (valuePersonalizedElement === "false") {
      changedPositionPersonalizeMenu[
        Object.keys(changedPositionPersonalizeMenu)[nrPersonalizedElement]
      ].position = true;
    } else {
      changedPositionPersonalizeMenu[
        Object.keys(changedPositionPersonalizeMenu)[nrPersonalizedElement]
      ].position = false;
    }
    this.setState({ personalizedElements: changedPositionPersonalizeMenu });
  };
  getWeather = async () => {
    const api_call = await fetch(
      `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${
        this.state.city
      }&days=7`
    );
    const data = await api_call.json();
    this.setState({ actualData: data.current });
    this.setState({ forecastData: data.forecast });
    this.setState({ cityData: data.location });
  };
  render() {
    return (
      <div className="weatherBoxes">
        <BurgerMenu
          personalizedElements={this.state.personalizedElements}
          changePosition={this.changePositionPersonalizeMenu}
          changeCity={this.changeCity}
          getWeather={this.getWeather}
        />
        <ActualDayBox
          personalizedElements={this.state.personalizedElements}
          cityName={this.state.city}
          actualData={this.state.actualData}
          cityName={this.state.cityData}
        />
        <Gallery
          personalizedElements={this.state.personalizedElements}
          forecastData={this.state.forecastData}
        />
      </div>
    );
  }
}
export default App;
