import React, { Component } from "react";

class Action extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    // this.reset = this.reset.bind(this);
  }

  clear() {
    this.setState({
      initialTasks: []
    })
  }

  // reset() {
  //   this.setState({
  //     initialTasks: this.props.initialTasks
  //   })
  // }

  render() {
    const {initialTasks} = this.props;
    
    return (
      <div>
        <button onClick = {this.clear}>Clear the list</button>
        <button onClick = {this.reset}>Reset the list</button>
      </div>
    )
  }
}

export default Action;