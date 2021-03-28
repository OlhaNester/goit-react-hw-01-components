import React from 'react';
//import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return <FriendListItem friends={friends} />;
};

export default FriendList;
