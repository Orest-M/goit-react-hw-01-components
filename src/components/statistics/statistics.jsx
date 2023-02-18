import PropTypes from 'prop-types';

import StatisticsTitle from 'components/statistics-title/statistics-title';
import StatisticsStats from 'components/statistics-stats/statistics-stats';

import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <StatisticsTitle title={title} /> : null}
      <StatisticsStats stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
