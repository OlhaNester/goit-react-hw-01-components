import ContainerApp from './components/ContainerApp/ContainerApp';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHstory';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHstory/transactions.json';

const App = () => {
  return (
    <ContainerApp>
      <Profile
        user={user}
              />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </ContainerApp>
  );
};

export default App;
