import {
  Table,
  TableHead,
  TableBody,
  Row,
  TypeTransaction,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <TypeTransaction>{type}</TypeTransaction>
            <td>{amount}</td>
            <td>{currency}</td>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })

  )
}


export default TransactionHistory;
