import React from 'react';
import styles from './TransHistory.module.css';
import PropTypes from 'prop-types';

const TransList = ({ items }) => {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr className={styles.titlerow}>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.value}>{type}</td>
            <td className={styles.value}>{amount}</td>
            <td className={styles.value}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransList;
