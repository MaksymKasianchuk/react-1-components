import './App.css';
import user from './json/user.json';
import friends from './json/friends.json';
import data from './json/data.json';
import transactions from './json/transactions.json';

import Profile from './components/Profile';
import FriendList from './components/FriendList';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

function App() {
  const {username, tag, location, avatar, stats} = user;
  return(
    <>
      <Profile 
        username = {username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats} 
      />
      <FriendList
        friendList={friends}
      />
      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
      <Statistics 
        stats={data} 
      />
      <TransactionHistory 
        items={transactions} 
      />;
    </>
  );
}

export default App;
