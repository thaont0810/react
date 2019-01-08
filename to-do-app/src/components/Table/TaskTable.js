import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.state = {
      initialTasks: this.props.tasks
    };
  }

  handleRemoveTask (itemIndex) {
    this.state.initialTasks.splice(itemIndex, 1);
    this.setState({
      initialTasks: this.props.tasks
    });
  }

  render() {
    const { tasks, filter } = this.props;

    const taskItem = tasks.map((task, index) => {
      if (task.toLowerCase().indexOf(filter) === -1) {
        return;
      }
      return (
        <TaskItem 
          task = {task} 
          index ={index} 
          key = {index} 
          onRemoveTask = {this.handleRemoveTask}/>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>(x)</th>
          </tr>
        </thead>
        <tbody>{taskItem}</tbody>
      </table>
    );
  }
}

export default TaskTable;
