import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { buttonName, buttonClasses, btnClick } = this.props;
    return (
      <button type="button" className={buttonClasses} onClick={btnClick}>{buttonName}</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClasses: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
