import React from 'react';
import PropTypes from 'prop-types';

function Currency({ name, onClick }) {
  return (
    <li className="currency" onClick={() => onClick(name)}>
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Currency;
