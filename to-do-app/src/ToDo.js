import React, { Component } from "react";
import "./App.css";
import TaskTable from "./components/Table/TaskTable";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Action from "./components/Action";

const initTasks = [
  "Finish Redux Tutorials",
  "Learn more about Relay",
  "Build 5 more React apps",
  "Review React Component Lifecycle",
  "Obtain Data Visualization Certificate",
  "Review Algorithms"
];

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      tasks: initTasks.slice(0)
      // item : 0
    };
  }

  componentDidMount() {
    let { tasks } = this.state;
    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify(tasks));
    } else {
      tasks = JSON.parse( localStorage.getItem( "todo" ) );
      this.setState({ tasks });
    }
  }

  handleFilter = filter => {
    this.setState({
      filter
    });
  };

  addNewTask = task => {
    let { tasks } = this.state;
    tasks.push(task);
    this.setState({ tasks });
    localStorage.setItem('todo', JSON.stringify(tasks));
  };

  clearList = () => {
    this.setState({
      tasks: []
    }, () => {
      localStorage.setItem('todo', JSON.stringify(this.state.tasks))
    });
  };

  resetList = () => {    
    this.setState({
      tasks: initTasks.slice(0)
    }, () => {
      localStorage.setItem('todo', JSON.stringify(this.state.tasks))
    });
  };

  removeTask = itemIndex => {
    let { tasks } = this.state;
    tasks.splice(itemIndex, 1);
    this.setState({
      tasks
    });
    localStorage.setItem('todo', JSON.stringify(this.state.tasks));
  };

  insertTask = item => {
    let { tasks } = this.state;
    tasks.push(item.toString());
    this.setState({
      tasks
    });
    localStorage.setItem('todo', JSON.stringify(this.state.tasks));
  };

  sortList = () => {
    let { tasks } = this.state;
    tasks
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .sort((a, b) => {
        return a - b;
      });
    this.setState({
      tasks
    });
    localStorage.setItem('todo', JSON.stringify(this.state.tasks));
  };

  render() {
    const { tasks, filter } = this.state;

    return (
      <div className="App">
        <header>
          <h1>React To-Do App</h1>
        </header>
        <AddTask addNewTask={this.addNewTask} />
        <br />
        <SearchBar filter={filter} onFilterChange={this.handleFilter} />
        <br />
        <TaskTable tasks={tasks} filter={filter} removeTask={this.removeTask} />
        <br />
        <Action
          clearList={this.clearList}
          resetList={this.resetList}
          insertTask={this.insertTask}
          sortList={this.sortList}
        />
      </div>
    );
  }
}

export default ToDo;
