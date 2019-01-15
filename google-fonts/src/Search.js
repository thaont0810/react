import React, { Component } from "react";
const categories = [
  "Serif",
  "Sans Serif",
  "Display",
  "Handwriting",
  "Monospace"
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories
    };
  }
  render() {
    const { categories } = this.state;

    return (
      <div className="search">
        <input type="text" className="input" placeholder="Search..." />

        <div className="search-panel">
          <p>Categories</p>
          <ul>
            {categories.map((cat, i) => (
              <li key={i}>
                <input
                  className="styled-checkbox"
                  id={`checkbox-${i}`}
                  type="checkbox"
                  value="value1"
                />
                <label htmlFor={`checkbox-${i}`}>{cat}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
