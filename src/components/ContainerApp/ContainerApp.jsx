import PropTypes from 'prop-types';
import { Container } from './ContainerApp.styled';

const ContainerApp = ({ children }) => {
  return <Container>{children}</Container>;
};

ContainerApp.propTypes = {
  children: PropTypes.node,
};

export default ContainerApp;
