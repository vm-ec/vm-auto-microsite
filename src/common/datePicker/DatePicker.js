import React from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';

const TextInput = ({ label, name, placeholder, isValid, disabled, errorMessage, onDateInputChangeHndlr, validationRules }) => (
  <div className={`form-group ${isValid ? '' : 'error' } ${disabled ? 'disabled' : ''}`}>
    <label>{label}{validationRules?.required?.value && '*'}</label>
    <input
      type="date"
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      className="date-input"
      onChange={onDateInputChangeHndlr}
    />
     {(!isValid && <span className="error-text">{errorMessage}</span>)}
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextInput;
