import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleAddTask = e => {
    e.preventDefault();
    let {newTask} = this.state;
    if (newTask.length > 0) {
      this.props.addNewTask(newTask);
      this.setState({
        newTask: ""
      });
    }
  };

  render() {
    const {newTask} = this.state;
    
    return (
      <form>
        <input
          className="input"
          type="text"
          placeholder="add new task"
          value={newTask}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleAddTask}>
          Enter New Task
        </button>
      </form>
    );
  }
}

export default AddTask;
