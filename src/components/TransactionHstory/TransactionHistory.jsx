import {
  Table,
  TableHead,
  TableBody,
  Row,
  TypeTransaction,
} from './TransactionHistory.styled';

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

export default TransactionHistory;
