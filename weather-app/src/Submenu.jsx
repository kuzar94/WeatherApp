import React, { Component } from "react";
import "./Submenu.css";

class Submenu extends Component {
  handleOnClick = e => {
    this.props.changeBurgerMenuStatus(e.target.value);
  };
  render() {
    return (
      <div className="submenu">
        <input
          type="button"
          ref={ref => (this.input = ref)}
          className="submenuInput"
          value={"Personalize"}
          onClick={this.handleOnClick}
        />
        <input
          type="button"
          ref={ref => (this.input = ref)}
          className="submenuInput"
          value={"Send yourself a message"}
          onClick={this.handleOnClick}
        />
        <input
          type="button"
          ref={ref => (this.input = ref)}
          className="submenuInput"
          value={"Help"}
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}
export default Submenu;
