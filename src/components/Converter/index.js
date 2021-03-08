import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesData from 'src/data/currencies';

import './style.scss';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    // le state permet de stocker des données internes au composant
    // à chaque fois qu'on modifie une de ses valeurs, React refait un rendu.
    this.state = {
      open: true,
    };

    // pour chaque méthode de la classe, on va devoir les lier au contexte de la classe
    // ainsi elles prendront le this de l'instance de classe
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // chaque fonction a son propre contexte d'exécution
    // elles redéfinissent un nouveau this
    const { open } = this.state;
    // Pour faire varier le state, il faut utiliser setState
    // React est notifié qu'il y a un changement dans le state
    // il exécutera de nouveau la méthode render()
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
