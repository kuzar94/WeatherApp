import React from "react";
import Slider from "react-slick";
import DayBox from "./DayBox";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, howManySlides: 3.5 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("load", this.updateWindowDimensions);
    this.getHowManySlides();
  }
  getHowManySlides = () => {
    if (this.state.width > 1100) {
      this.setState({ howManySlides: 3.5 });
    } else if (this.state.width > 800) {
      this.setState({ howManySlides: 2.5 });
    } else if (this.state.width > 500) {
      this.setState({ howManySlides: 1.5 });
    } else if (this.state.width > 1) {
      this.setState({ howManySlides: 1.2 });
    }
  };
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.getHowManySlides();
  }
  render() {
    var settings = {
      infinite: false,
      slidesToShow: this.state.howManySlides,
      swipeToSlide: true,
      arrows: false,
      dots: false
    };
    if (this.props.forecastData === undefined) {
      return <div className="noDataBox" />;
    } else {
      return (
        <div className="carouselDiv">
          <Slider {...settings}>
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
          </Slider>
        </div>
      );
    }
  }
}
export default Gallery;
