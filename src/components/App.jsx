import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friends/FriendList';
import TransactionHistory from 'components/transaction/TransactionHistory';
import users from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <div className='container'>
      <Profile
        avatar = {users.avatar}
        username = {users.username}
        tag = {users.tag}
        location = {users.location}
        stats = {users.stats}
      />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
