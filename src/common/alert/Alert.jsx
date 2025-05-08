import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import { useEffect } from 'react';

const Alert = ({ type, message, onClose }) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-message">{message}</span>
      {onClose && 
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
