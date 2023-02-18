import PropTypes from 'prop-types';

import FriendListItem from 'components/friend-list-item/friend-list-item';

import css from './friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
