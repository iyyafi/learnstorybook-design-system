import PropTypes from 'prop-types';

export const Box = ({ content }) => {
  return <div>{content}</div>;
};

Box.propTypes = {
  /**
    Custom string for content
    */
  content: PropTypes.string,
};

Box.defaultProps = {
  content: 'loading',
};
