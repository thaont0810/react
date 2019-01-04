import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const { products, filterText, inStock} = this.props;
    const rows = [];
    let lastCate = null;
    

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (inStock && !product.stocked) {
        return;
      }

      if (product.category !== lastCate) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      lastCate = product.category

      rows.push(
        <ProductRow 
          product={product} 
          key={product.name} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
