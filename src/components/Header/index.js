import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Header({ title, baseAmount, onChangeBaseAmount }) {
  const handleOnChange = (event) => {
    // input number renvoie une valeur de type string
    // il nous faut un number
    onChangeBaseAmount(Number(event.target.value));
  };
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__input">
        <input
          type="number"
          className="header__input"
          value={baseAmount}
          onChange={handleOnChange}
        />
        <span>{baseAmount > 1 ? 'Euros' : 'Euro'}</span>
      </p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  baseAmount: PropTypes.number.isRequired,
  onChangeBaseAmount: PropTypes.func.isRequired,
};

export default Header;
