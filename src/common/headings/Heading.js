import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = ({ level, children, className }) => {
  const Tag = `h${level}`;

  return <Tag className={className}>{children}</Tag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export default Heading;
