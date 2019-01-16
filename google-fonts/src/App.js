import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ListFont from "./ListFont";
import Search from "./Search";
import { API_FONTS } from "./FontApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFont: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(API_FONTS)
      .then(({ data }) => {
        this.setState({
          listFont: data.items
        });
      })
      .catch(err => {
        console.log("err");
      });
  };

  render() {
    const { listFont } = this.state;
    // console.log(listFont);

    return (
      <div className="container">
        <ListFont listFont={listFont} />
        <Search />
      </div>
    );
  }
}

export default App;
