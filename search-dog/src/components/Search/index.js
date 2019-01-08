import React, { Component } from "react";
import Suggestions from "./components/Suggestions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: "",
      showSuggestions : false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getSuggestions(value) {
    let {breedList} = this.props;
    let r = breedList.filter(
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
        showSuggestions : true
      });
    } else {
      this.setState({
        suggestions: [],
        showSuggestions : false
      });
    }
  }

  handleSelectBreed = (breedObj) => {
    let {handleSelectBreed} = this.props;
    this.setState({
      showSuggestions : false,
      searchWords : breedObj.name
    });
    handleSelectBreed(breedObj.id);
  }

  render() {
    const { showSuggestions, suggestions } = this.state;
    let {handleSelectBreed} = this.props;
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
        </form>

        {showSuggestions ? (
          <Suggestions predictation={suggestions} handleSelectBreed={this.handleSelectBreed}/>
        ) : null}
      </div>
    );
  }
}

export default Search;
