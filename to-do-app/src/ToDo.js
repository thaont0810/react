import React, { Component } from "react";
import "./App.css";
import TaskTable from "./components/Table/TaskTable";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Action from "./components/Action";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      newTask: '',
      initialTasks: this.props.tasks
    };
    this.handleFilter = this.handleFilter.bind(this);
    // this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      filter
    })
  }

  addTask(e) {

  }

  render() {
    const { tasks } = this.props;
    const { filter, initialTasks } = this.state;
    // console.log('initialTasks',this.state.initialTasks);

    return (
      <div className="App">
        <header>
          <h1>React To-Do App</h1>
        </header>
        <AddTask onAddTask = {this.handleAddTask}/>
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
        <Action initialTasks = {initialTasks} />
      </div>
    );
  }
}

export default ToDo;
