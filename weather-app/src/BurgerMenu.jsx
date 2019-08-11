import React, { Component } from "react";
import "./BurgerMenu.css";
import Submenu from "./Submenu";
import PersonalizeMenu from "./PersonalizeMenu";
import Form from "./Form";
import Help from "./Help";

class BurgerMenu extends Component {
  state = {
    burgerMenuStatus: "Personalize"
  };
  changeBurgerMenuStatus = changedBurgerMenu => {
    this.setState({ burgerMenuStatus: changedBurgerMenu });
  };
  returnBurgerStatus = () => {
    switch (this.state.burgerMenuStatus) {
      case "Personalize":
        return <PersonalizeMenu menuData={this.props} />;
      case "Send yourself a message":
        return <Form />;
      case "Help":
        return <Help />;
      default:
        return null;
    }
  };
  handleClick = () => {
    this.props.getWeather();
  };
  render() {
    return (
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input
              type="checkbox"
              id="menuCheckbox"
              onClick={this.handleClick}
            />
            <span />
            <span />
            <span />
            <div id="menu">
              <Submenu changeBurgerMenuStatus={this.changeBurgerMenuStatus} />
              {this.returnBurgerStatus()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default BurgerMenu;
