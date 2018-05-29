import React, { Component } from 'react';
import './ProductList.css';
import Product from './Product';


class ProductList extends Component {

  render() {
    const products = [
      {
        photoURL: 'https://images-na.ssl-images-amazon.com/images/I/51awtSXuNXL._SX385_BO1,204,203,200_.jpg',
        name: 'Learning React',
        disPrice: 37.99,
        stanPrice: 39.99
      },
      {
        photoURL: 'https://images-na.ssl-images-amazon.com/images/I/51awtSXuNXL._SX385_BO1,204,203,200_.jpg',
        name: 'Learning React',
        disPrice: 37.99,
        stanPrice: 39.99
      },
      {
        photoURL: 'https://images-na.ssl-images-amazon.com/images/I/51awtSXuNXL._SX385_BO1,204,203,200_.jpg',
        name: 'Learning React',
        disPrice: 37.99,
        stanPrice: 39.99
      }
    ]

    const productComponents = products.map ((product) => {
      return (
        <li key={product.photoURL}>
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
