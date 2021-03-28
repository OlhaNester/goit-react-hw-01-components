import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function RandomColor() {
  let color = '';
  for (var i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

const StatisticList = ({ stats }) => (
  <ul className={styles.list}>
    {stats.map(({ id, label, percentage }) => (
      <li
        className={styles.item}
        key={id}
        style={{
          backgroundColor: RandomColor(),
        }}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);
StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default StatisticList;
