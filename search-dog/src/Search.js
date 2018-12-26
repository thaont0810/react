import React, { Component } from "react";
// import DogList from "./DogList";
import axios from "axios";
import Suggestions from "./Suggestions";

// const API_URL = "https://thedogapi.com/";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWords: "",
      results: [],
      suggestions: [],
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.getData()
  }

  getData() {
    axios
      .get(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg,gif&format=json&has_breeds=true&order=DESC&page=0&limit=100"
      )
      .then(({ data }) => {
        this.setState({
          results: data,
          suggestions: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getSuggestions(searchWords) {
    let r = this.state.results.filter(item =>
      item.breeds[0].name.toLowerCase().indexOf(searchWords.toLowerCase()) !== -1
    );
    return r;
  }

  handleChange(event) {
    const searchWords = event.target.value;
    
    this.setState({
      searchWords
    });
    if(searchWords.length > 0) {
      const predict = this.getSuggestions(searchWords);
      this.setState({
        suggestions: predict
      });
    } else {
      this.setState({
        suggestions: this.state.results
      });
    }
  }

  render() {
    // console.log(this.state.results);
    const { loading } = this.state;
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
        {/* <DogList doglist = {this.state.results}/> */}
        {!loading ? (
          <Suggestions predictation={this.state.suggestions} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Search;
