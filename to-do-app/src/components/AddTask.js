import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    // this.handleAddTask = this.handleAddTask.bind(this);
  }

  // handleAddTask (e) {
  //   e.preventDefault();
  //   this.props.onAddTask(e.target.value);
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     term: '',
  //     items: [...this.state.items, this.state.term]
  //   });
  // }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          className='input'
          type="text" 
          placeholder = 'add new task'
          value= ''
          onChange = {this.handleAddTask}/>
        <button 
          type='submit'
          >Enter New Task</button>
      </form>
    )
  }
}

export default AddTask;