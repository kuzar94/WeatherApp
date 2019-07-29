import React, { Component } from "react";
import "./BurgerMenu.css";
import PersonalizeMenu from "./PersonalizeMenu";
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
              <PersonalizeMenu />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default BurgerMenu;
