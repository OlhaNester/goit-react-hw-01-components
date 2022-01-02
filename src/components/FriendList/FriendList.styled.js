import styled from 'styled-components';

export const List = styled.ul`
  max-width: 300px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  margin: 15px auto;
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Name = styled.p`
  margin-left: 20px;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;