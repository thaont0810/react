import React, { Component } from "react";


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    const {filter} = this.props;
    return (
      <form>
        <input 
          className='input'
          type="text" 
          placeholder = 'filter lists'
          value = {filter}
          onChange = {this.handleFilter}
        />
      </form>
    )
  }
}

export default SearchBar;