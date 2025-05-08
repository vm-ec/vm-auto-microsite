// SelectInput.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './SelectInput.css';
import { getRequest } from 'sdk-library';

const SelectInput = React.forwardRef(
  ({ id, name, label, options, value, onChange, disabled, isValid, required, className, errorMessage, validationRules, optionsAPI, dependentOn }, ref) => {
    const [optionsData, setOptionsData] = useState(options);
    useEffect(() => {
      if (optionsAPI && !dependentOn ) {
        getOPtions();
      }
    }, [optionsAPI])

    useEffect(()=>{
      // if(name=='state') {
        console.log('optionsData', optionsData);
        setOptionsData(options);
      // }
    },[options])

    const getOPtions = async() => {
      try {
        await getRequest(optionsAPI)
         .then(resp => {
          console.log('res', resp);
           setOptionsData(resp);
         })
     } catch (error) {
       console.log("Sorry! We are not serving in the zipcode that you entered")
     }
    }

    return (
      <div className={`select-input ${className}`}>
        <label htmlFor={id} className={`select-label ${required ? 'required' : ''}`}>
          {label}
          {validationRules?.required?.value && <span aria-hidden="true" className="text-input-required">*</span>}
        </label>
        <select
          id={id}
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-required={validationRules?.required?.value}
          aria-invalid={!isValid}
          className={`select-box ${isValid ? '' : 'has-error'}`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {optionsData?.data?
          optionsData?.data?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )):optionsData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        }
        </select>
        {!isValid && <span className="error-message">{errorMessage}</span>}
      </div>
    );
  }
);

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

SelectInput.defaultProps = {
  disabled: false,
  required: false,
  className: '',
  errorMessage: '',
};

export default SelectInput;
