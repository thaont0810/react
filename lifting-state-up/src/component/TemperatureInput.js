import React, { Component } from "react";

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemChange(e.target.value);
  }

  render() {
    const {temp} = this.props
    const {scale} = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input 
          type="text" 
          value = {temp}
          onChange = {this.handleChange}/>
      </fieldset>
    );
  }
}

export default TemperatureInput;
