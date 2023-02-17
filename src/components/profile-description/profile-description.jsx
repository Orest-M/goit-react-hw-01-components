import PropTypes from 'prop-types';
import css from './profile-description.module.css'

const ProfileDescription = ({ username, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default ProfileDescription;
