import React from "react";
import CarouselDiv from "./CarouselDiv";
import ActualDayBox from "./ActualDayBox";
import BurgerMenu from "./BurgerMenu";
import "./App.css";

function App() {
  return (
    <div className="weatherBoxes">
      <BurgerMenu />
      <ActualDayBox />
      <CarouselDiv />
    </div>
  );
}

export default App;
