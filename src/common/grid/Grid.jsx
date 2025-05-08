import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css'; // Import CSS for styling

// Helper function to generate class names based on size props
const getSizeClasses = ({ xs, sm, md, lg, xl }) => {
  const classes = [];
  if (xs) classes.push(`col-xs-${xs}`);
  if (sm) classes.push(`col-sm-${sm}`);
  if (md) classes.push(`col-md-${md}`);
  if (lg) classes.push(`col-lg-${lg}`);
  if (xl) classes.push(`col-xl-${xl}`);
  return classes.join(' ');
};

// Row Component
const Row = ({ children, className }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

// Col Component
const Col = ({ children, xs, sm, md, lg, xl, className }) => {
  const sizeClasses = getSizeClasses({ xs, sm, md, lg, xl });
  return <div className={`${sizeClasses} ${className}`}>{children}</div>;
};

// PropTypes for type checking
Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  className: PropTypes.string,
};

// Default props
Row.defaultProps = {
  className: '',
};

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  className: '',
};

export { Row, Col };
