import PropTypes from 'prop-types';
import StatisticList from './StatisticList';

const Statistics = ({title, stats}) => {
    return ( <section >
      {title && <h2 >Upload stats</h2>}

      <StatisticList stats={stats} />
    </section> );
}
 Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;