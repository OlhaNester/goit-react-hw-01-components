import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';

const StatisticList = ({ stats }) => {
    return ( <ul >
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </ul> );
}
 StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};
export default StatisticList;