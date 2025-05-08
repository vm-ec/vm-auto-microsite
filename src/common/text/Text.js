import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const Text = ({ variant, size, weight, color, children, className }) => {
  const classNames = [
    'text',
    `text-${variant}`,
    `text-${size}`,
    `text-${weight}`,
    `text-${color}`,
    className
  ].join(' ');

  return <p className={classNames}>{children}</p>;
};

Text.propTypes = {
  variant: PropTypes.oneOf(['body', 'caption', 'overline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  weight: PropTypes.oneOf(['light', 'normal', 'bold']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  variant: 'body',
  size: 'medium',
  weight: 'normal',
  color: 'primary',
  className: '',
};

export default Text;
