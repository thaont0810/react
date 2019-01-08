import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask () {
    
  }

  render() {
    return (
      <form>
        <input 
          className='input'
          type="text" 
          placeholder = 'add new task'
          value= ''/>
        <button 
          className='submit'
          onClick = {this.addTask}
          >Enter New Task</button>
      </form>
    )
  }
}

export default AddTask;