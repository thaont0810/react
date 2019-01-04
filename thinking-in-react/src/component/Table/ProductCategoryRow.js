import React, {Component} from 'react';

class ProductCategoryRow extends Component {
  render() {
    const {category} = this.props;
    
    return (
      <tr>
        <th>{category}</th>
      </tr>
    )
  }
}

export default ProductCategoryRow;