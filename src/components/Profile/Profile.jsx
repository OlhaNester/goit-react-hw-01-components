import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

const Profile = ({ avatar, name, tag, location, stats }) => {
  // const keys = Object.keys(stats);
  //       for (const key of keys){
  //         console.log(key, stats[key])
  //       };
  return (
    <div >
      <div >
        <img
          src={avatar}
          alt="Аватар пользователя"
          width="200"
        />
        <p >{name}</p>
        <p >@{tag}</p>

        <p >{location}</p>
      </div>

      <ul>
        
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;