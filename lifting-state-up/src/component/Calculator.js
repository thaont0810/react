import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      scale: "c"
    };
    this.handleCelChange = this.handleCelChange.bind(this);
    this.handleFahChange = this.handleFahChange.bind(this);
  }

  handleCelChange(temp) {
    this.setState({
      scale: "c",
      temp
    });
  }

  handleFahChange(temp) {
    this.setState({
      scale: "f",
      temp
    });
  }

  toCel(fah) {
    return ((fah - 32) * 5) / 9;
  }

  toFah(cel) {
    return (cel * 9) / 5 + 32;
  }

  tryConvert(temp, convertFunc) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convertFunc(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const scaleNames = {
      c: "Celsius",
      f: "Fahrenheit"
    };
    const { scale } = this.state;
    const { temp } = this.state;
    const cel = scale === "f" ? this.tryConvert(temp, this.toCel) : temp;
    const fah = scale === "c" ? this.tryConvert(temp, this.toFah) : temp;

    return (
      <div>
        <TemperatureInput
          scale={scaleNames.c}
          temp={cel}
          onTemChange={this.handleCelChange}
        />
        <TemperatureInput
          scale={scaleNames.f}
          temp={fah}
          onTemChange={this.handleFahChange}
        />
        <BoilingVerdict cel={parseFloat(cel)} />
      </div>
    );
  }
}

export default Calculator;
