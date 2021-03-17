import React, { useEffect, useRef, useState } from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import './style.scss';
import axios from 'axios';

function Converter() {
  const [baseAmount, setBaseAmount] = useState(1);
  const [currency, setCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState(1);

  const loadData = async () => {
    const api_key = process.env.API_KEY;
    try {
      const JSONdata = await axios.get(`https://v6.exchangerate-api.com/v6/${api_key}/latest/EUR`);
      const data = JSONdata.data.conversion_rates;
      const currenciesData = [];
      Object.keys(data).forEach((key) => {
        currenciesData.push({
          name: key,
          rate: data[key]
        });
      });
      setCurrencies(currenciesData);
    }
    catch (error) {
      console.log(error);   
    }
  }

  useEffect(loadData, []);

  const makeConversion = () => {
    const foundCurrency = currencies.find((item) => item.name === currency);
    const result = baseAmount * foundCurrency.rate;
    return Number(result.toFixed(2));
  }

  const handleClickCurrency = (currencyToConvert) => {
    setCurrency(currencyToConvert);
    setValue(makeConversion(currencyToConvert));
  }

  return (
    <div className="converter">
      <Header
        title="Converter"
        baseAmount={1}
      />
      <Currencies
        currencies={currencies}
        handleClickCurrency={handleClickCurrency}
      />
      <Result
        value={value}
        currency={currency}
      />
    </div>
  );
}

export default Converter;
