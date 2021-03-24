//import user from "./src/user.json";
import PropTypes from "prop-types";

const Profile = ({ user }) => {
  const { url, tag, name, location, followers, views, likes } = user;

  return (
    <div class="profile">
      <div class="description">
        <img src={url} alt="Аватар пользователя" class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.PropTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.namber.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
