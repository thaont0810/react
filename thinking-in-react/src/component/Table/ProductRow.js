import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const { product } = this.props;
    const product_name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{product_name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
