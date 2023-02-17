import PropTypes from 'prop-types';

import css from './statistics-title.module.css';

const StatisticsTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
