import React, { Component } from "react";
import ReactDOM from "react-dom";

class SubMenu extends Component {

  render() {
    const { menu } = this.props;
    
    if (!menu.dropdown) {
      return null;
    } else {
      return (
        <ul className='dropdown'>
          {menu.dropdown.map((sub) => {
            return (
              <li 
                className="sub-item" 
                key ={sub.id}
                >
                <a 
                  href= '#'
                  className= 'sub-link'
                  key={sub.id}>{sub.title}</a>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default SubMenu;
