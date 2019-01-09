import React, { Component } from "react";

class Action extends Component {
  render() {
    return (
      <div>
        <button onClick = {() => {this.props.clearList()}}>Clear the list</button>
        <button onClick = {() => {this.props.resetList()}}>Reset the list</button>
      </div>
    )
  }
}

export default Action;