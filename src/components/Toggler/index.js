import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({ open, onClick }) {
  const handleClick = (event) => {
    onClick(event);
  }
  return (
    <button type="button" className={open ? 'toggler toggler--open' : 'toggler'} onClick={handleClick}>+</button>
  );
}

Button.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
