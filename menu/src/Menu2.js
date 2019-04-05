import React, { Component } from "react";
import ReactDOM from "react-dom";
import SubMenu from "./SubMenu2";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: ""
    };
    // this.showDropDown = this.showDropDown.bind(this);
  }

  showDropDown(value) {
    this.setState({
      selectedItem: value
    });
  }

  render() {
    const { menus } = this.props;
    // let thisMenu = this;

    return (
      <div className="container">
        <ul className="nav">
          {menus && menus.map(menu => {
            return (
              <li
                className="nav-item"
                onClick={() => this.showDropDown(menu.title)}
                key={menu.id}
              >
                {/*<a href="#" className="nav-link">
                  {menu.title}
                </a>*/}
                <Router>
                  <Link to={`${menu.title}`}
                        className="nav-link"
                        key={menu.id}>{menu.title}
                  </Link>
                </Router>

                <SubMenu
                  menu={menu}
                  selectedItem={this.state.selectedItem}
                  showDropDown={this.showDropDown}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
