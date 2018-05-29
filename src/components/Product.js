import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {

  static propTypes = {
    photoURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stanPrice: PropTypes.number.isRequired,
    isPresent: PropTypes.bool,
  }

  isDiscounted = () => {
    if (this.props.disPrice) {
      return 'delete'
    }
  }

  render() {
    const photoURL = this.props.photoURL;
    const name = this.props.name;
    const disPrice = this.props.disPrice;
    const stanPrice = this.props.stanPrice;

    return (
      <article>
        <img src={photoURL} alt={name} />
        <p>{name}</p>
        <section>
          <span className='red'>${disPrice}</span>
          <span> </span>
          <span className={this.isDiscounted()}>${stanPrice}</span>
        </section>
      </article>
    );
  }
}

export default Product;
