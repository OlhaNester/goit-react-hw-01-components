import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransHistory from './components/TransHistory/TransHistory';

import user from './data/user.json';
import stats from './data/stats.json';
import friends from './data/friends.json';
import items from './data/items.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransHistory items={items} />
    </Container>
  );
}

export default App;
