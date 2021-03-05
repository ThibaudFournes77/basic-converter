import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Result({ value, unit }) {
  return (
    <main className="result">
      <p className="result__value">{value}</p>
      <p className="result__unit">{unit}</p>
    </main>
  );
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Result;
