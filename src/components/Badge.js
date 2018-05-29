import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

class Badge extends Component {

  static propTypes = {
    number: PropTypes.number.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const number = this.props.number;

    return (
      <span className='badge'>{number}</span>
    );
  }
}

export default Badge;
