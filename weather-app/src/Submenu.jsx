import React, { Component } from "react";
import "./Submenu.css";

class Submenu extends Component {
  render() {
    return (
      <div className="submenu">
        <button className="submenuButton">Personalize</button>
        <button className="submenuButton">Send yourself a message</button>
        <button className="submenuButton">Help</button>
      </div>
    );
  }
}
export default Submenu;
