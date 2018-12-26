import React, { Component } from "react";
import './styles/header.css';
import MenuButton from './components/MenuButton';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state= {
      searchVisible: false
    }
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render() {
    let searchInputClasses = ['searchInput'];
    
    if(this.state.searchVisible) {
      searchInputClasses.push('active');
    }
    
    return (
      <div className="header">
        <MenuButton name = 'menu'/>
        <span className="title">{this.props.title}</span>
        <input 
          type="text" 
          className= {searchInputClasses.join(' ')}
          placeholder="Search..." />
        <div 
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    );
  }
}

Header.defaultProps = {
  title : 'default title'
}
export default Header;
