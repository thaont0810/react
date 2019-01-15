import React, { Component } from "react";
import { listImages } from "./slideData.js";
import "./slide.css";
import Slide from "./Slide";
import NextBtn from "./Button/NextBtn";
import PrevBtn from "./Button/PrevBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listImages: listImages,
      currentIndex: 0,
      translateX: 0
    };
  }

  prevSlide = () => {
    const { currentIndex, translateX } = this.state;

    if (currentIndex === 0) {
      return this.setState({
        // currentIndex: listImages.length - 1,
        // translateX: translateX + this.slideWidth()
      });
    }

    this.setState({
      currentIndex: currentIndex - 1,
      translateX: translateX + this.slideWidth()
    });
  };

  nextSlide = () => {
    const { currentIndex, listImages, translateX } = this.state;
    if (currentIndex === listImages.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateX: 0
      });
    }
    this.setState({
      currentIndex: currentIndex + 1,
      translateX: translateX + -this.slideWidth()
    });
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    const { listImages, translateX } = this.state;
    const styleWrapper = {
      transform: `translateX(${translateX}px)`,
      transition: "transform ease-out 0.45s"
    };
    return (
      <div className="slider">
        <div style={styleWrapper} className="slider-wrapper">
          {listImages.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </div>
        <div className="ft-btn">
          <PrevBtn prevSlide={this.prevSlide} />
          <NextBtn nextSlide={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default App;
