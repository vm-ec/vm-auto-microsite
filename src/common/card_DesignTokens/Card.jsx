import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import CSS for styling

// Card Component
const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

// CardHeader Component
const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

// CardBody Component
const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

// Prop Types
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

// Default Props
Card.defaultProps = {
  className: '',
};

// Export Components
export { Card, CardHeader, CardBody };
