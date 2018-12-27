import React, { Component } from "react";
// import DogList from "./DogList";
import axios from "axios";
import Suggestions from "./Suggestions";
import { API_DOG_IMAGES, API_DOG_BREED } from "./config/api.js";

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
    this.getBreed();
    // this.getDetail();
  }

  getBreed() {
    axios
      .get(`${API_DOG_BREED}?limit=100`)
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
  }

  // getDetail() {
  //   axios
  //     .get(
  //       `${API_DOG_IMAGES}?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=100`
  //     )
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data,
  //         suggestions: data,
  //         loading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  getSuggestions(value) {
    let r = this.state.results.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return r;
  }

  handleChange(event) {
    const searchWords = event.target.value;

    this.setState({
      searchWords
    });
    if (searchWords.length > 0) {
      const predict = this.getSuggestions(searchWords);
      this.setState({
        suggestions: predict,
      });
    } else {
      this.setState({
        suggestions: this.state.results
      });
    }
  }

  render() {
    // console.log(this.state.results);
    const { loading } = this.props;

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
