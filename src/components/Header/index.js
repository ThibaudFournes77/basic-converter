import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Header({ title, baseAmount }) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{baseAmount} {baseAmount > 1 ? 'Euros' : 'Euro'}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
