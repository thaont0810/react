import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskTable extends Component {

  render() {
    const { tasks, filter } = this.props;

    const taskItem = tasks.map((task, index) => {
      if (task.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
        return;
      }
      return (
        <TaskItem 
          task = {task} 
          index ={index} 
          key = {index} 
          removeTask = {this.props.removeTask}/>
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
