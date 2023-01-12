import userData from '../../data/user.json';
import StatisticsData from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import TransactionHistory from 'components/TransactionHistory';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import { Container, Section } from './App.styled';

function App() {
  const {username, tag, location, avatar, stats} = userData;
  return (
    <div>
      <Container>

        <Section firstSection>
          <Profile 
            username={username} 
            tag={tag} 
            location={location} 
            avatar={avatar} 
            stats={stats}
          />
        </Section>

        <Section>
          <Statistics 
            title="Upload Stats"
            stats={StatisticsData}
          />
        </Section>

        <Section>
          <Statistics 
            stats={StatisticsData}
          />
        </Section>

        <Section>
          <FriendList friends={friends}/>
        </Section>

        <Section lastSection>
          <TransactionHistory items={transactions} />
        </Section>

      </Container>
    </div>
  );
}

export default App;
