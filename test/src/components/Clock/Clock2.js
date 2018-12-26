import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.tick(), 1000
    );
  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div id ='clock'>
        <div className= 'clock'>It is {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    )
  }
}


export default Clock;
