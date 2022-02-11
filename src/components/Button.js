import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const Button = ({ buttonName, buttonClasses, btnClick }) => {
  return (
    <button type="button" className={buttonClasses} onClick={btnClick}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClasses: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
