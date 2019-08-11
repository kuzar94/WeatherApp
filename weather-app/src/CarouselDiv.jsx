import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import DayBox from "./DayBox";
import "./CarouselDiv.css";

class Gallery extends React.Component {
  state = {
    responsive: { 1: { items: 4 } },
    stagePadding: {
      paddingLeft: 60,
      paddingRight: 100
    }
  };
  render() {
    console.log("sprawdzam propsy w karuzeli = " + this.props.forecastData);
    if (this.props.forecastData === undefined) {
      return <div className="noDataBox" />;
    } else {
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
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[1]}
            />
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[2]}
            />
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[3]}
            />
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[4]}
            />
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[5]}
            />
            <DayBox
              menuData={this.props}
              forecastData={this.props.forecastData.forecastday[6]}
            />
          </AliceCarousel>
        </div>
      );
    }
  }
}
export default Gallery;
