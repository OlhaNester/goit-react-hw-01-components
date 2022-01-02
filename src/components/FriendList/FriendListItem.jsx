import { Item, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item>
      <span>{isOnline}</span>
      <img src={avatar} alt="name" width="48" />

      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;
