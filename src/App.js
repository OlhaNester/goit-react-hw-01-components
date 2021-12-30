import ContainerApp from './components/ContainerApp/ContainerApp';
import Profile from './components/Profile';
import Statistics from './components/Statistics';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';



const App = () => {
  return ( 
    <ContainerApp>
       <Profile
      avatar={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      </ContainerApp>
    

   );
}
 
export default App;


