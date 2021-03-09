import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'src/components/Currencies/Currency';

import './style.scss';

function Currencies({ currencies, handleClickCurrency, inputValue }) {
  return (
    <div className="currencies">
      <input
        type="text"
        className="currencies__input"
        placeholder="Rechercher une devise"
        value={inputValue}
      />
      <ul className="currencies__list">
        {
          currencies.map((currency) => (
            <Currency
              key={currency.name}
              name={currency.name}
              onClick={handleClickCurrency}
            />
          ))
        }
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.number,
  })).isRequired,
  handleClickCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Currencies;
