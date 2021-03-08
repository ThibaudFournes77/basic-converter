import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'src/components/Currencies/Currency';

import './style.scss';

function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        {
          currencies.map((currency) => <Currency key={currency.name} name={currency.name} />)
        }
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
};

export default Currencies;
