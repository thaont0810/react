import React, { Component } from "react";
import ReactDOM from "react-dom";
import SubMenu from "./SubMenu2";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: "",
      showSub: false,
      active: false
    };
    // this.showDropDown = this.showDropDown.bind(this);
  }

  showDropDown = (value) => {
    // e.preventDefault(e);
    this.setState({
      selectedItem: value,
      showSub: !this.state.showSub
    });
  };

  handleActive = () => {
    this.setState({
      active: !this.state.active
    })
  };

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
                {/*<a href={`${menu.title}`}
                   className="nav-link"
                   key={menu.id}>
                  {menu.title}
                </a>*/}
                <Router>
                  <Link to={`${menu.title}`}
                        className={'nav-link' + (this.state.active ? ' active': '')}
                        onClick={() => this.handleActive()}
                  >{menu.title}
                  </Link>
                </Router>
                {
                  menu && menu.dropdown ? (
                      <SubMenu
                          menu={menu}
                          selectedItem={this.state.selectedItem}
                          // showDropDown={this.showDropDown}
                      />
                  ) : (
                      null
                  )

                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Menu;
