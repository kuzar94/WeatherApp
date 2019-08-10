import React, { Component } from "react";
import "./ActualDayBox.css";

class ActualDayBox extends Component {
  makeElementsLi = () => {
    let i = 0;
    Object.values(this.props.personalizedElements).map((values, key) => {
      if (values.position) {
        i++;
      }
      return i;
    });
    if (i > 8) {
      i = 3;
    } else if (i > 4) {
      i = 2;
    } else i = 1;
    return (
      <div className={"listActualBox column" + i}>
        <ul>
          {Object.values(this.props.personalizedElements).map((values, key) => {
            if (values.position) {
              return (
                <li key={key}>
                  <div className="actualBoxName">{values.name} </div>{" "}
                  <div className="actualBoxValue">40%</div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="actualDayBox">
        <div className="cityActualBox">
          <input type="text" name="name" value={this.props.cityName} />
        </div>
        <div className="panelActualBox">
          <div className="imageDivActualBox">
            <div className="imageActualBox" />
          </div>

          <div className="listDivActualBox">{this.makeElementsLi()}</div>
        </div>
      </div>
    );
  }
}
export default ActualDayBox;
