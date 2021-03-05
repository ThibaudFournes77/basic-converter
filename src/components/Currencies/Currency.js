import React from 'react';
import PropTypes from 'prop-types';

function Currency({ name }) {
  return (
    <li>
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
