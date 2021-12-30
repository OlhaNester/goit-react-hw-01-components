import React from 'react';
import PropTypes from 'prop-types';

function RandomColor() {
  let color = '';
  for (var i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}


const StatisticItem = ({ label, percentage }) => {
    return (  <li
      
     
      style={{
        backgroundColor: RandomColor(),
      }}
    >
      <span >{label}</span>
      <span >{percentage}%</span>
    </li> );
}
 StatisticItem.propTypes = {
 
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticItem;