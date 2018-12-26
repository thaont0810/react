import React, { Component } from "react";
import ReactDOM from "react-dom";
import SubMenu from "./SubMenu";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false
    };
  }

  showDropDown() {
    this.setState({
      dropDown: !this.state.dropDown
    });
  }

  render() {
    const { menus } = this.props;
    // console.log(menus);
    let thisMenu = this;

    let dropDownClass = 'dropdown';
    if(this.state.dropDown) {
      dropDownClass += ' show';
    }

    return (
      <div className="container">
        <ul className="nav">
          {menus.map(menu => (
            <li
              key={menu.id}
              className="nav-item"
              onClick={thisMenu.showDropDown.bind(thisMenu)}
            >
              <a href="#" className="nav-link" key={menu.id}>
                {menu.title}
              </a>
              {/* {!menu.dropdown ? null : <SubMenu menu={menu} />} */}
              <SubMenu menu={menu}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
