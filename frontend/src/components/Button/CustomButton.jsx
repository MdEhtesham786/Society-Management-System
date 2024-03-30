// CustomButton.js

import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css'; // Import CSS file for styling

const CustomButton = ({ onClick, disabled, type, className, children, style }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`custom-button ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

// Defining the type of props
CustomButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Default props if there isn't any props from parent this will be default
CustomButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'button',
  className: '',
};

export default CustomButton;
