import React, { Component } from "react";
import TaskRow from "./TaskRow";

class TaskTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { tasks, filter } = this.props;
    const rows = [];

    tasks.map((task, index) => {
      if (task.toLowerCase().indexOf(filter) === -1) {
        return;
      }
      

      rows.push(
        <TaskRow 
          task={task} 
          index={index} 
          key= {index}
          // delTask = {this.delTask}
          />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>(x)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default TaskTable;
