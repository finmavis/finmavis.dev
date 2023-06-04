import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export type ContainerProps = {
  sizes?: 'small' | 'medium' | 'large';
};

const Container = styled.div<ContainerProps>`
  max-width: ${(props) =>
    props.sizes === 'large'
      ? '1100px'
      : props.sizes === 'small'
      ? '800px'
      : '900px'};
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
`;

Container.defaultProps = {
  sizes: 'medium',
};

Container.propTypes = {
  sizes: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Container;
