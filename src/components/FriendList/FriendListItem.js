import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) =>
  friends.map(({ id, isOnline, avatar, name }) => (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  ));

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendListItem;
