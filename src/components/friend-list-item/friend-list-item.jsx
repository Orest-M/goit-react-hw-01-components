import PropTypes from 'prop-types';

import css from './friend-list-item.module.css';

const FriendListItem = ({ friends }) => {
  return friends.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <span className={item.isOnline ? css.online : css.offline}></span>
        <img
          className={css.avatar}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{item.name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendListItem;
