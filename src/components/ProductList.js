import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import Product from './Product';


class ProductList extends Component {

  static propTypes = {
    products: PropTypes.array.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const products = this.props.products;

    const productComponents = products.map ((product) => {
      return (
        <li key={product.props.photoURL}>
          <Product
            photoURL={product.photoURL}
            name={product.name}
            disPrice={product.disPrice}
            stanPrice={product.stanPrice}
          />
        </li>
      );
    });

    return (
      <ul>
        {productComponents}
      </ul>
    );
  }
}

export default ProductList;
