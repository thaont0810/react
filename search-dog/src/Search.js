import React, { Component } from "react";
// import DogList from "./DogList";
import axios from "axios";
import Suggestions from "./Suggestions";
import { API_DOG_BREED } from "./config/api.js";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWords: "",
      breedList: [],
      suggestions: [],
      loading: true,
      showSuggestions: false

    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getBreed();
  }

  getBreed() {
    axios
      .get(`${API_DOG_BREED}?limit=100`)
      .then(({ data }) => {
        this.setState({
          breedList: data,
          suggestions: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getSuggestions(value) {
    let r = this.state.breedList.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return r;
  }

  handleChange(event) {
    const searchWords = event.target.value;

    this.setState({
      searchWords,
      showSuggestions: true
    });

    if (searchWords.length > 0) {
      const predict = this.getSuggestions(searchWords);
      this.setState({
        suggestions: predict,
      });
    } else {
      this.setState({
        // suggestions: this.state.breedList
        suggestions: []
      });
    }
  }

  render() {
    // console.log(this.state.results);
    const { loading, showSuggestions } = this.state;

    return (
      <div className="container">
        <form action="">
          <input
            className="input"
            type="text"
            placeholder="Search for ..."
            value={this.state.searchWords}
            onChange={this.handleChange}
          />
          {/* <p>{this.state.searchWords}</p> */}
        </form>
        {/* <DogList doglist = {this.state.breedList}/> */}
        {!loading && showSuggestions ? (
          <Suggestions predictation={this.state.suggestions} />
        ) : (
          null
        )}
      </div>
    );
  }
}

export default Search;
