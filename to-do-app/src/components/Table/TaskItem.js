import React, { Component } from "react";

class TaskItem extends Component {
  
  handleRemoveTask = () => {
    const index = this.props.index;
    this.props.onRemoveTask(index);
  }

  render() {
    const {task, index} = this.props;
    
    return (
      <tr>
        <td className="taskNumber">Task: {index+1}</td>
        <td className="taskName">{task}</td>
        <td className="taskDel">
          <button className='remove' onClick={this.handleRemoveTask}>x</button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
