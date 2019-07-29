import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import DayBox from "./DayBox";
import "./CarouselDiv.css";

class Gallery extends React.Component {
  state = {
    responsive: { 1: { items: 4 } },
    stagePadding: {
      paddingLeft: 60, // in pixels
      paddingRight: 100
    }
  };

  render() {
    const { responsive, stagePadding } = this.state;
    return (
      <div className="carouselDiv">
        <AliceCarousel
          mouseDragEnabled
          buttonsDisabled={true}
          responsive={responsive}
          stagePadding={stagePadding}
          infinite={false}
          dotsDisabled={true}
        >
          <DayBox />
          <DayBox />
          <DayBox />
          <DayBox />
          <DayBox />
          <DayBox />
        </AliceCarousel>
      </div>
    );
  }
}
export default Gallery;
