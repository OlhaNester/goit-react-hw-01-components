import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

import {
  ProfileContainer,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';

const Profile = ({ user }) => {
  const { avatar, username: name, tag, location, stats } = user;
  // const keys = Object.keys(stats);
  //       for (const key of keys){
  //         console.log(key, stats[key])
  //       };
  return (
    <ProfileContainer>
      <div>
        <Avatar src={avatar} alt="Аватар пользователя" width="200" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>

        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  // user: PropTypes.object.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};

export default Profile;
