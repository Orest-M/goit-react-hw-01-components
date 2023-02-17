import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friend-list/friend-list';
import TransactionHistory from './transaction-history/transaction-history';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
