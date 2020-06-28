import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
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
