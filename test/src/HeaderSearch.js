import React, { Component } from "react";
import "./styles/header.css";
import MenuButton from './components/MenuButton';
import SearchForm from './SearchFormWithSubmit';

class Header extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchVisible: false
  //   };
  // }

  // showSearch() {
  //   this.setState({
  //     searchVisible: !this.state.searchVisible
  //   });
  // }

  render() {
    // let searchInputClasses = ["searchInput"];
    // const {searchVisible} = this.state;
    // if (searchVisible) {
    //   searchInputClasses.push("active");
    // }
    return (
      <div className="header">
        <MenuButton />
        <span className="title">{this.props.title}</span>
        {/* <input
          type="search"
          className={searchInputClasses.join(' ')}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search ..." /> */}
        <SearchForm
          // searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSubmit} />
        <div
          // onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"
        />
      </div>
    );
  }
}

Header.defaultProps = {
  title: "aaaa"
};
export default Header;
