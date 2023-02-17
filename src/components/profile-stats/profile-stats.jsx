import PropTypes from 'prop-types';
import css from './profile-stats.module.css'

const ProfileStats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};

export default ProfileStats;
