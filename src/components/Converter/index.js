import React from 'react';
import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesData from 'src/data/currencies';

import './style.scss';

class Converter extends React.Component {
  // grâce au plugin de babel @babel/plugin-proposal-class-properties
  // on ne sera plus obligé de créer le constructor pour initialiser le state
  // il nous permet de créer des propriétés de classe
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  }

  handleClickButton = () => {
    // les fonctions fléchées ne redéfinissent pas de contexte d'exécution
    // elles prennent le contexte parent
    // ici on a le this de la classe
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleClickCurrency = (currencyToConvert) => {
    this.setState({
      currency: currencyToConvert,
    });
  }

  setSearch = (value) => {
    this.setState({
      search: value,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;
    const foundCurrency = currenciesData.find((item) => item.name === currency);
    const result = baseAmount * foundCurrency.rate;
    return Number(result.toFixed(2));
  }

  render() {
    const {
      open, baseAmount, currency, search,
    } = this.state;
    return (
      <div className="converter">
        <Header
          title="Converter"
          baseAmount={baseAmount}
        />
        <Toggler open={open} onClick={this.handleClickButton} />
        { open && (
        <Currencies
          currencies={currenciesData}
          inputValue={search}
          handleClickCurrency={this.handleClickCurrency}
          onChangeInputValue={this.setSearch}
        />
        ) }
        <Result
          value={this.makeConversion()}
          currency={currency}
        />
      </div>
    );
  }
}

export default Converter;
