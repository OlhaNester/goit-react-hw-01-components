import styled from 'styled-components';

export const Table = styled.table`
  padding: 20px;
  margin: 20px auto auto;
  width: 75%;
  text-align: center;
  border: 1px solid rgb(178, 182, 182);
  background: white;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background: rgb(71, 28, 62);
  color: white;
`;

export const TableBody = styled.tbody`
  color: rgb(144, 61, 126);
`;

export const Row = styled.tr`
  :nth-child(2n) {
    background-color: rgb(178, 182, 182);
  }
`;

export const TypeTransaction = styled.td`
  text-transform: capitalize;
`;
