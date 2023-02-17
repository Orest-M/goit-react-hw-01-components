import PropTypes from 'prop-types';

import css from './statistics-stats-item.module.css';

const StatisticsStatsItem = ({ stats }) => {
  return stats.map(item => {
    return (
      <li key={item.id} className={css.item}>
        <span className={css.label}>{item.label}</span>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>
    )
  });
};

StatisticsStatsItem.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default StatisticsStatsItem;
