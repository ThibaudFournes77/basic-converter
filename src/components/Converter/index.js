import React from 'react';
import Header from 'src/components/Header';
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
  }

  handleClick = () => {
    // les fonctions fléchées ne redéfinissent pas de contexte d'exécution
    // elles prennent le contexte parent
    // ici on a le this de la classe
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="converter">
        <Header
          title="Converter"
          subtitle="1 euro"
        />
        <button type="button" onClick={this.handleClick}>Afficher/masquer</button>
        { open && (
        <Currencies currencies={currenciesData} />
        ) }
        <Result
          value={1.09}
          unit="United States Dollar"
        />
      </div>
    );
  }
}

export default Converter;
