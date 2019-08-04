import React, { Component } from "react";
import "./PersonalizeMenu.css";

class PersonalizeMenu extends Component {
  // FUNKCJA TA WYKONUJE FUNKCJE NADANA Z PROPSOW, I PRZESYLA W NIEJ NAZWE KONKRETNEJ DANY, ORAZ JEJ WARTOSC (czy ma checked false albo true)
  handleClick = e => {
    let valuePersonalizedElement = e.target.value;
    let nrPersonalizedElement = e.target.name;
    this.props.menuData.changePosition(
      valuePersonalizedElement,
      nrPersonalizedElement
    );
  };
  render() {
    return (
      <div className="divPersonalizeMenu">
        <ul className="personalizeMenu">
          {/* TWORZE SOBIE MAPE Z WARTOSCI PROPSOW (CZYLI MOJE DANE tj, temperatura, zachmurzenie, cisnienie) */}
          {Object.values(this.props.menuData.personalizedElements).map(
            (values, key) => {
              return (
                // KAZDY LI MA SWOJ KLUCZ ORAZ TWORZE W NIM DIVA Z TEKSTEM NAZWY MOJEJ KONKRETNEJ DANY (temperatura,zachmurzenie,itp)
                <li key={key}>
                  <div className="textPersonalizeMenu">{values.name}</div>
                  <label className="switch">
                    {/* TUTAJ TWORZE INPUT TZW.CHECKBOX I NADAJE MU WARTOSCI Z OTRZYMANYCH PROPSOW */}
                    <input
                      ref={ref => (this.input = ref)}
                      type="checkbox"
                      value={values.position}
                      checked={values.position}
                      name={key}
                      // NA ZMIANIE MA WYKONAWC FUNKCJE HANDLECLICK
                      onChange={this.handleClick}
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
