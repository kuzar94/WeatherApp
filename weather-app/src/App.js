import React, { Component } from "react";
import CarouselDiv from "./CarouselDiv";
import ActualDayBox from "./ActualDayBox";
import BurgerMenu from "./BurgerMenu";
import "./App.css";

class App extends Component {
  state = {
    personalizedElements: {
      a0: {
        name: "Temperature",
        position: true
      },
      a1: {
        name: "Max temperature",
        position: true
      },
      a2: {
        name: "Min temperature",
        position: true
      },
      a3: {
        name: "Sensed temperature",
        position: true
      },
      a4: {
        name: "Condition",
        position: true
      },
      a5: {
        name: "Wind speed",
        position: false
      },
      a6: {
        name: "Wind degree",
        position: false
      },
      a7: {
        name: "Pressure",
        position: false
      },
      a8: {
        name: "Humidity",
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
    city: "Gdansk"
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

  render() {
    return (
      <div className="weatherBoxes">
        <BurgerMenu
          personalizedElements={this.state.personalizedElements}
          changePosition={this.changePositionPersonalizeMenu}
          changeCity={this.changeCity}
        />
        <ActualDayBox
          personalizedElements={this.state.personalizedElements}
          cityName={this.state.city}
        />
        <CarouselDiv personalizedElements={this.state.personalizedElements} />
      </div>
    );
  }
}
export default App;
