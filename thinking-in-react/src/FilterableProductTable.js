import React, { Component } from "react";
import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  render() {

    const {products} = this.props;

    return (
      <div>
        <SearchBar />
        <ProductTable products = {products}/>
      </div>
    )
  }
}

export default FilterableProductTable;