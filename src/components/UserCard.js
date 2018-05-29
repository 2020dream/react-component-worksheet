import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';
import Avatar from './Avatar';
import Badge from './Badge';


class UserCard extends Component {

  static propTypes = {
    userName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const userName = this.props.userName;
    const imageURL = this.props.imageURL;
    const rank = this.props.rank;
    const number = this.props.number;

    return (
      <article className='user-card'>
        <Avatar imageURL={imageURL} />
        <p>{userName}</p>
        <p>{rank}</p>
        <p><Badge number={number}/></p>
      </article>
    );
  }
}

export default UserCard;
