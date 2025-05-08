import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = forwardRef(
    ({ name, label, value, onChange, disabled, className, isValid, options, errorMessage, validationRules }, ref) => {
  return(<div className='radio-sec'>
    <label>{label}
    {validationRules?.required?.value && <span aria-hidden="true" className="text-input-required">*</span>}
    </label>
    {options.map((option) => (
      <div className={`radio-button ${className}`}>
      <input
        type="radio"
        id={`${name}-${option.value}`}
        name={name}
        value={option.value}
        checked={option.value === value}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
        aria-checked={option.value === value}
        aria-disabled={disabled}
        className="radio-input"
      />
      <label htmlFor={`${name}-${option.value}`} className="radio-label">
        {option.label}
      </label>
      
    </div>
    ))}
    {!isValid && <span className="error-message">{errorMessage}</span>}
  </div>
  )
  }
);

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Function to call when the radio button is changed
  checked: PropTypes.bool, 
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};


RadioButton.defaultProps = {
    checked: false,
    disabled: false,
    className: '',
  };

export default RadioButton;
