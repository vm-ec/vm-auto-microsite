import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';

const CheckboxGroup = ({ label, options, selectedValues, onChange, name, className, validationRules }) => {
  
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter((selected) => selected !== value));
    }
  };

  return (
    <div className={`checkbox-group ${className}`}>
    <span>{label}
    {validationRules?.required?.value && <span aria-hidden="true" className="text-input-required">*</span>}
    </span><br /><br />
      {options.map((option) => (
        <div key={option.value} className="checkbox-item">
          <input
            type="checkbox"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          <label
            htmlFor={option.value}
            className="checkbox-label"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  className: '',
};

export default CheckboxGroup;
