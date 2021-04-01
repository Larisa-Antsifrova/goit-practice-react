import React, { Component } from 'react';
import { getCocktails } from '../../services/cocktailsApi';
class CocktailsPage extends Component {
  state = {
    drinks: [],
  };

  componentDidMount() {
    getCocktails('margarita').then(drinks => this.setState({ drinks }));
  }

  render() {
    const { drinks } = this.state;

    return (
      <>
        <h1>Cocktails Page</h1>
        <ul>
          {drinks.map(drink => (
            <li key={drink.idDrink}>{drink.strDrink}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default CocktailsPage;
