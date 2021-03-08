import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Button({ open, onClick }) {
  return (
    <button type="button" className={open ? 'toggler toggler--open' : 'toggler'} onClick={onClick}>+</button>
  );
}

Button.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
