import React, { Component } from "react";
import "./App.css";
import TaskTable from "./components/Table/TaskTable";
import AddTask from "./components/AddTask";
import FilterList from "./components/FilterList";
import Action from "./components/Action";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      newTask: '',
      initialTasks: []
    };
    this.handleFilter = this.handleFilter.bind(this);
    // this.addTask = this.addTask.bind(this);
  }

  componentDidMount() {
    this.setState({
      initialTasks: this.props.tasks
    })
  }

  handleFilter(filter) {
    this.setState({
      filter
    })
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
        <AddTask addTask = {this.addTask}/>
        <br />
        <FilterList 
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
