import React from 'react';

import Currency from 'src/components/Currencies/Currency';

import './style.scss';

function Currencies() {
  return (
    <ul className="currencies">
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </ul>
  );
}

export default Currencies;
