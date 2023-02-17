import PropTypes from 'prop-types';

import ProfileDescription from 'components/profile-description/profile-description';
import ProfileStats from 'components/profile-stats/profile-stats';

import css from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
