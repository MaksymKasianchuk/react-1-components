import userData from '../../data/user.json';
import StatisticsData from '../../data/data.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';

import { Container } from './App.styled';

function App() {
  const {username, tag, location, avatar, stats} = userData;
  return (
    <div>
      <Container>
        <Profile 
          username={username} 
          tag={tag} 
          location={location} 
          avatar={avatar} 
          stats={stats}
        />
        <Statistics 
          title="Upload Stats"
          stats={StatisticsData}
        />
      </Container>
    </div>
  );
}

export default App;
