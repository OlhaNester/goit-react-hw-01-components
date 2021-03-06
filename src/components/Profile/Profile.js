import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { avatar, tag, name, location, stats } = user;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="Аватар пользователя"
          width="100"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.objectOf(
        PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
export default Profile;
