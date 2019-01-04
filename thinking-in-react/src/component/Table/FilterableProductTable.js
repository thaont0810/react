import React, { Component } from "react";
import SearchBar from "../SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      inStock: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this)

  }

  handleInputChange (filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange(inStock) {
    this.setState({
      inStock: inStock
    })
  }
  render() {
    const { products } = this.props;
    const { filterText, inStock } = this.state;

    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStock={inStock} 
          onInputChange = {this.handleInputChange}
          onInStockChange = {this.handleInStockChange}/>
        <ProductTable
          products={products}
          filterText={filterText}
          inStock={inStock}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
