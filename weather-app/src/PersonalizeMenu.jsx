import React, { Component } from "react";
import "./PersonalizeMenu.css";

class PersonalizeMenu extends Component {
  render() {
    return (
      <div>
        <ul className="personalizeMenu">
          <li>
            <div className="textPersonalizeMenu"> Temperature</div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu">Max temperature </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> Min temperature </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> Sensed temperature</div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu">Condition </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu">Wind speed </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> Wind degree</div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> Pressure </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> Humidity</div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu">Cloudy </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu">Sensed temperature </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
          <li>
            <div className="textPersonalizeMenu"> UV </div>
            <label className="switch">
              <input type="checkbox" /> <div />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
export default PersonalizeMenu;
