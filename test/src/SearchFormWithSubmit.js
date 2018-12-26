import React, { Component } from "react";
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
  };

  static defaultProps = {
    onSubmit: () => {},
    searchVisible: false
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  updateSearchInput(e) {
    const val = e.target.value;
    this.setState({
      searchText: val
    });
  }

  submitForm(event) {
    event.preventDefault();
    // const {searchText} = this.state;
    this.props.onSubmit(this.state.searchText);
  }

  render() {
    const { searchVisible } = this.props;
    
    let searchClasses = ["searchInput"];
    if (searchVisible) {
      searchClasses.push("active");
    }

    return (
      <form onSubmit = {this.submitForm.bind(this)}>
        <input
          type="search"
          value= {this.state.searchText}
          className={searchClasses.join(" ")}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search..."
        />
         {/* <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div> */}
      </form>
    );
  }
}

export default SearchForm;
