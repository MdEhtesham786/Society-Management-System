// CustomInput.js

import React from 'react';
import PropTypes from 'prop-types';
import './CustomInput.css'; // Import CSS file for styling

const CustomInput = ({ value, onChange, placeholder, type, className, disabled, inputName, labelText }) => {
  return (
    <div className="input-wrapper">
      {labelText &&
        <label htmlFor={inputName}>{labelText}</label>
      }
      <input
        type={type}
        className={`custom-input ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={inputName}
        name={inputName}
      />
    </div>
  );
};

CustomInput.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'checkbox', 'date']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputName: PropTypes.string,
  labelText: PropTypes.string
};

CustomInput.defaultProps = {
  placeholder: '',
  type: 'text',
  className: '',
  disabled: false,
  inputName: '',
};

export default CustomInput;
