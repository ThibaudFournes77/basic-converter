import React, { useEffect, useRef, useState } from 'react';
import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

//import currenciesData from 'src/data/currencies';

import './style.scss';
import axios from 'axios';

function Converter() {
  // grâce au plugin de babel @babel/plugin-proposal-class-properties
  // on ne sera plus obligé de créer le constructor pour initialiser le state
  // il nous permet de créer des propriétés de classe
  const [open, setOpen] = useState(true);
  const [baseAmount, setBaseAmount] = useState(1);
  const [currency, setCurrency] = useState('EUR');
  const [search, setSearch] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState(1);
  const loaded = useRef(false);

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
      loaded.current = true;
    }
    catch (error) {
      console.log(error);   
    }
  }

  useEffect(() => {
    pageTitleEffect();
  }, [currency]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyUp);
  });

  useEffect(loadData, []);

  const makeConversion = () => {
    const foundCurrency = currencies.find((item) => item.name === currency);
    const result = baseAmount * foundCurrency.rate;
    return Number(result.toFixed(2));
  }

  useEffect(() => {
    // Nous ne devons changer la valeur à convertir que quand le composant est monté
    // càd quand loaded vaut true
    if(loaded.current){
       setValue(makeConversion(currency));
    }
   
  }, [currency]);

  const handleEscKeyUp = (event) => {
    if (event.key === 'Escape') {
      setOpen(!open);
    }
  }

  const pageTitleEffect = () => {
    document.title = currency;
  }

  const handleClickCurrency = (currencyToConvert) => {
    setCurrency(currencyToConvert);
  }

  const handleClickToggler = () => {
    setOpen(!open);
  }

  const onChangeInputValue = (value) => {
    setSearch(value);
  }

  const onChangeBaseAmount = (value) => {
    setBaseAmount(value);
  }

  const getCurrencies = () => {
    let filteredListCurrenciesList = currencies;

    // ici je veux filtrer la liste des devises en fonction de search
    if (search) {
      filteredListCurrenciesList = filteredListCurrenciesList.filter((currency) => {
        const loweredCurrency = currency.name.toLowerCase();
        const loweredSearch = search.toLowerCase();
        // est-ce que ce qui est dans search est inclus dans la propriété name
        return loweredCurrency.includes(loweredSearch);
      });
    }

    return filteredListCurrenciesList;
  }

  // const value = 1;

  // à chaque rendu du JSX, on récupère la liste des devises
  // filtrées en fonction de la valeur de search
  const currenciesList = getCurrencies();

  return (
    <div className="converter">
      <Header
        title="Converter"
        baseAmount={baseAmount}
        onChangeBaseAmount={onChangeBaseAmount}
      />
      <Toggler open={open} onClick={handleClickToggler} />
      { open && (
      <Currencies
        currencies={currenciesList}
        inputValue={search}
        handleClickCurrency={handleClickCurrency}
        onChangeInputValue={onChangeInputValue}
      />
      ) }
      <Result
        value={value}
        currency={currency}
      />
    </div>
  );
}

export default Converter;
