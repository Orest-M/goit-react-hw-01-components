import PropTypes from 'prop-types';

import FriendListItem from 'components/friend-list-item/friend-list-item';

import css from './friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
