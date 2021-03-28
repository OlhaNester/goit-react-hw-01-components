import React from 'react';
import styles from './Statistics.module.css';

import PropTypes from 'prop-types';
import StatisticList from './StatisticList';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}> {title}</h2>}
      <StatisticList stats={stats} />
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
