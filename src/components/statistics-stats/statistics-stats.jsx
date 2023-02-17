import PropTypes from 'prop-types';

import StatisticsStatsItem from 'components/statistics-stats-item/statistics-stats-item';

import css from './statistics-stats.module.css';

const StatisticsStats = ({ stats }) => {
  return <ul className={css['stat-list']}>
    <StatisticsStatsItem stats={stats} />
  </ul>;
};

StatisticsStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default StatisticsStats;
