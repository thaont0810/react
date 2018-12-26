import React, { Component } from "react";
import ReactDOM from "react-dom";

class SubMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { menu, selectedItem, showDropDown } = this.props;
    
    if (menu.title !== selectedItem) {
      return null;
    } else {
      return (
        <ul className= 'dropdown'>
          {menu && menu.dropdown && menu.dropdown.map((sub) => {
            return (
              <li 
                className="sub-item" 
                >
                <a 
                  href= '#'
                  className= 'sub-link'>{sub.title}</a>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default SubMenu;
