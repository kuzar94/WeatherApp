import React, { Component } from "react";
import "./BurgerMenu.css";
import PersonalizeMenu from "./PersonalizeMenu";
import Submenu from "./Submenu";
import Form from "./Form";
import Help from "./Help";

class BurgerMenu extends Component {
  render() {
    return (
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" id="menuCheckbox" />
            <span />
            <span />
            <span />
            <div id="menu">
              <Submenu />
              <PersonalizeMenu menuData={this.props} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default BurgerMenu;
