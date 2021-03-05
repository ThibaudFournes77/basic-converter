import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';

import './style.scss';

function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <Footer />
    </div>
  );
}

export default Converter;
