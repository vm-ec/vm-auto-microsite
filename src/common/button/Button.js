import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, disabled, color, variant, size, fullWidth, key, shape, className, as, href, type }) => {

  if (as === 'a') {
    return (
      <a href={href} 
      className={`btn btn-${color}${variant ? '-' + variant : ''} ${className}  btn-${size}  ${fullWidth ? 'btn-fullWidth' : ''} ${shape ? shape : ''}`}
      onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <button
      className={`btn btn-${color}${variant ? '-' + variant : ''} ${className}  btn-${size}  ${fullWidth ? 'btn-fullWidth' : ''} ${shape ? shape : ''}`}
      onClick={onClick}
      disabled={disabled}
      key={key}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf([ 'filled', 'outline', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  key: PropTypes.string,
  shape: PropTypes.oneOf(['rounded-0','rounded-pill','rounded-5','rounded-10']),
  className: PropTypes.string,
  as: PropTypes.oneOf(['a', 'button']),
  href: PropTypes.string,
  type:  PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  onClick: () => { },
  disabled: false,
  color: 'primary',
  variant: 'filled',
  size: 'medium',
  fullWidth: false,
  className: '',
  type: 'button',
  href:'#'
};

export default Button;
