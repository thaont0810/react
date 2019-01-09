import React, { Component } from "react";
import "./App.css";
import TaskTable from "./components/Table/TaskTable";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Action from "./components/Action";

const initTasks = [
  'Finish Redux Tutorials',
  'Learn more about Relay',
  'Build 5 more React apps',
  'Review React Component Lifecycle',
  'Obtain Data Visualization Certificate',
  'Review Algorithms',
]

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      tasks: initTasks.slice(0)
    };
  }

  handleFilter = (filter) => {
    this.setState({
      filter
    })
  }

  addNewTask = (task) => {
    let {tasks} = this.state;
    tasks.push(task)
    this.setState({tasks})
  }

  resetList = () => {
    this.setState({
      tasks : initTasks
    });
  }

  clearList = () => {
    this.setState({
      tasks: []
    })
  }

  render() {
    const { tasks, filter } = this.state;

    return (
      <div className="App">
        <header>
          <h1>React To-Do App</h1>
        </header>
        <AddTask addNewTask={this.addNewTask} />
        <br />
        <SearchBar 
          filter = {filter}
          onFilterChange = {this.handleFilter}
          />
        <br />
        <TaskTable 
          tasks={tasks}
          filter ={filter} />
        <br/>
        <Action 
          clearList = {this.clearList}
          resetList={this.resetList} 
          />
      </div>
    );
  }
}

export default ToDo;
