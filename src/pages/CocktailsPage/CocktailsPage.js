import React, { Component } from 'react';
import { getCocktails } from '../../services/cocktailsApi';
class CocktailsPage extends Component {
  state = {
    drinks: [],
    query: '',
  };

  componentDidMount() {
    getCocktails('margarita').then(drinks => this.setState({ drinks }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== this.state.query) {
      getCocktails(query).then(drinks => this.setState({ drinks }));
    }
  }

  SubmitHandler = event => {
    let { query } = event.target;
    event.preventDefault();

    this.setState({ query: query.value });

    query.value = '';
  };

  render() {
    const { drinks } = this.state;

    return (
      <>
        <h1>Cocktails Page</h1>
        <form onSubmit={this.SubmitHandler}>
          <input type="text" name="query" placeholder="Maybe, a drink?" />
        </form>
        {drinks ? (
          <ul>
            {drinks.map(drink => (
              <li key={drink.idDrink}>{drink.strDrink}</li>
            ))}
          </ul>
        ) : (
          'No drinks found!'
        )}
      </>
    );
  }
}

export default CocktailsPage;
