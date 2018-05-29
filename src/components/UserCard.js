import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

class UserCard extends Component {

  static propTypes = {
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.element.isRequired,
    rank: PropTypes.string.isRequired,
    badge: PropTypes.element.isRequired,
    isPresent: PropTypes.bool,
  }

  render() {
    const userName = this.props.userName;
    const avatar = this.props.avatar;
    const rank = this.props.rank;
    const badge = this.props.badge;

    return (
      <article className='user-card'>
        <img className='image' src={avatar.props.imageURL} alt='avatar' />
        <p>{userName}</p>
        <p>{rank}</p>
        <p>{badge.props.number}</p>
      </article>
    );
  }
}

export default UserCard;
