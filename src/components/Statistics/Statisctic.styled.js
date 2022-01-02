import styled from 'styled-components';

export const SectionStatistics = styled.section`
  max-width: 320px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;
export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% / 5);
  justify-content: center;
  padding: 10px 10px;
  color: white;
  font-weight: 500;
`;
