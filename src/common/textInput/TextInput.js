
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = forwardRef(
  ({ id, label, type, value, onChange, placeholder, disabled, validationRules, maxLength, errorMessage, isValid, className = '', ...props}, ref) => {
    return (
      <div className={`text-input-wrapper ${className}` }>
        {label && (
          <label htmlFor={id} className="text-input-label">
            {label}
            {validationRules?.required?.value && <span aria-hidden="true" className="text-input-required">*</span>}
            
          </label>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={validationRules?.required?.value}
          maxLength={maxLength}
          aria-invalid={isValid ? 'false' : 'true'}
          aria-required={validationRules?.required?.value}
          aria-describedby={isValid ? undefined : `${id}-error`}
          ref={ref}
          autoComplete="off"
          className={`text-input-field ${isValid ? '': 'text-input-error'}`}
          {...props}
        />
        {!isValid && <span className="text-input-error-message">{errorMessage}</span>}
      </div>
    );
  }
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  required: false,
  maxLength: 255,
  errorMessage: '',
};

export default TextInput;




