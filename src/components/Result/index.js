import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Result({ value, currency }) {
  return (
    <main className="result">
      <p className="result__value">{value}</p>
      <p className="result__unit">{currency}</p>
    </main>
  );
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Result;
