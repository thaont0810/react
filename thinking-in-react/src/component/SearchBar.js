import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value)
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked)
  }

  render() {
    const {filterText, inStock} = this.props;
    
    return (
      <form>
        <input 
          type="text" 
          placeholder= 'Search ...'
          value = {filterText}
          onChange = {this.handleInputChange}/>
        <p>
          <input 
            type="checkbox" 
            checked = {inStock}
            onChange = {this.handleInStockChange}/>Only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar;