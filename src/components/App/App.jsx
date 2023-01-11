import userData from '../../data/user.json';
import Profile from 'components/Profile';
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
      </Container>
    </div>
  );
}

export default App;
