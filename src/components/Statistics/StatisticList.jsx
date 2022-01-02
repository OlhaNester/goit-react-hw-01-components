import StatisticItem from './StatisticItem';
import { StatList } from './Statisctic.styled';
import PropTypes from 'prop-types';

const StatisticList = ({ stats }) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </StatList>
  );
};
StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};
export default StatisticList;
