import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

class Avatar extends Component {

  static propTypes = {
    imageURL: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const imageURL = this.props.imageURL;

    return (
      <img className='image' src={imageURL} alt='avatar' />
    );
  }
}

export default Avatar;
