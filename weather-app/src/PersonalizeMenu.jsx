import React, { Component } from "react";
import "./PersonalizeMenu.css";

class PersonalizeMenu extends Component {
  // FUNKCJA TA WYKONUJE FUNKCJE NADANA Z PROPSOW, I PRZESYLA W NIEJ NAZWE KONKRETNEJ DANY, ORAZ JEJ WARTOSC (czy ma checked false albo true)
  handleOnClick = e => {
    let valuePersonalizedElement = e.target.value;
    let nrPersonalizedElement = e.target.name;
    this.props.menuData.changePosition(
      valuePersonalizedElement,
      nrPersonalizedElement
    );
  };
  handleOnChange = e => {
    const changedCity = e.target.value;
    this.props.menuData.changeCity(changedCity);
  };
  render() {
    return (
      <div className="divPersonalizeMenu">
        <div className="personalizeCityDiv">
          City:
          <input
            autoComplete="off"
            ref={ref => (this.input = ref)}
            type="text"
            name="name"
            onChange={this.handleOnChange}
          />
        </div>
        <ul className="personalizeMenu">
          {Object.values(this.props.menuData.personalizedElements).map(
            (values, key) => {
              return (
                <li key={key}>
                  <div className="textPersonalizeMenu">{values.name}</div>
                  <label className="switch">
                    <input
                      ref={ref => (this.input = ref)}
                      type="checkbox"
                      value={values.position}
                      checked={values.position}
                      name={key}
                      onChange={this.handleOnClick}
                    />
                    <div />
                  </label>
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
export default PersonalizeMenu;
