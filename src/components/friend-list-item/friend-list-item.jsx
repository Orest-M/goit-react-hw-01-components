import PropTypes from 'prop-types';

import css from './friend-list-item.module.css';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendListItem;
