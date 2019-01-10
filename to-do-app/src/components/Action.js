import React, { Component } from "react";

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item : 0
    }
  }

  handleInsertTask = () => {
    let {item} = this.state;
    this.props.insertTask(item)
    this.setState ({
      item : item + 1
     })
  }

  render() {
    return (
      <div>
        <button onClick = {() => {this.props.clearList()}}>Clear the list</button>
        <button onClick = {() => {this.props.resetList()}}>Reset the list</button>
        <button onClick = {this.handleInsertTask}>Insert one task</button>
        <button onClick = {() => {this.props.sortList()}}>Sort the List</button>
      </div>
    )
  }
}

export default Action;