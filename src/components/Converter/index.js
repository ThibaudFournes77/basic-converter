import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import './style.scss';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <Result />
    </div>
  );
}

export default Converter;
