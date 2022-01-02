import PropTypes from 'prop-types';
import StatisticList from './StatisticList';
import { SectionStatistics, Title } from './Statisctic.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>Upload stats</Title>}

      <StatisticList stats={stats} />
    </SectionStatistics>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
