import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                key={sub.id}
                >
                {/*<a
                  href= '#'
                  className= 'sub-link'>{sub.title}</a>*/}
                <Router>
                    <Link to={`${menu.title}/${sub.title}`}
                          className= 'sub-link'
                          key={sub.id}>{sub.title}
                    </Link>
                </Router>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default SubMenu;
