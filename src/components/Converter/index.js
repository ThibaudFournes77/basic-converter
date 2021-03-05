import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesData from 'src/data/currencies';

import './style.scss';

function Converter() {
  return (
    <div className="converter">
      <Header
        title="Converter"
        subtitle="1 euro"
      />
      <Currencies currencies={currenciesData} />
      <Result
        value={1.09}
        unit="United States Dollar"
      />
    </div>
  );
}

export default Converter;
