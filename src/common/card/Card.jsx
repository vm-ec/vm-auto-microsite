import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import CSS for styling

// Card Component
const Card = ({ field, ...props}, ref) => {
 console.log("props", "hereee", props )
 const data = (props)=>{
  return Object.entries(props).map(([label,value])=>({
    label,value
  }));
 }
 const quoteData = data(props)
 const filteredData = quoteData.filter(item=>item.label !=='className' && item.label !=='component')
  return (
  <div className='quote-container'>
    <div className='quote-card'>
    {filteredData.map((field,index)=>(
          <div className='quote-row'>
            <h5 className='quote-card-label'>{field.label}</h5><p className='quote-card-value'>{field.value}</p></div>
    ))

    }</div></div>
  )
   
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
