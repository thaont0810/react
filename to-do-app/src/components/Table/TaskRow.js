import React, { Component } from "react";

class TaskRow extends Component {
  render() {
    const {task, index} = this.props;
    
    return (
      <tr>
        <td className="taskNumber">Task: {index+1}</td>
        <td className="taskName">{task}</td>
        <td className="taskDel">
          <button>x</button>
        </td>
      </tr>
    );
  }
}

export default TaskRow;
