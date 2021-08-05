import React, { Component } from 'react';
import { getCocktails } from '../../services/cocktailsApi';
import { connect } from 'react-redux';
import {
  getQuery,
  fetchCocktails,
  toggleModal,
} from '../../redux/cocktails/cocktails-actions';
class CocktailsPage extends Component {
  // state = {
  //   drinks: [],
  //   query: '',
  // };

  componentDidMount() {
    getCocktails('margarita').then(drinks => this.props.fetchCocktails(drinks));
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    console.log('query', query);

    if (prevProps.query !== query) {
      getCocktails(query).then(drinks => this.props.fetchCocktails(drinks));
    }
  }

  SubmitHandler = event => {
    let { query } = event.target;
    event.preventDefault();

    // this.setState({ query: query.value });

    this.props.getQuery(query.value);

    query.value = '';
  };

  toggleModal = () => {
    const { showModal } = this.props;
    this.props.toggleModal(!showModal);
  };

  render() {
    const { drinks } = this.props;

    return (
      <>
        <h1>Cocktails Page</h1>
        <form onSubmit={this.SubmitHandler}>
          <input type="text" name="query" placeholder="Maybe, a drink?" />
        </form>
        <button onClick={this.toggleModal}>Open Modal</button>
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

const mapStateToProps = state => ({
  drinks: state.drinks,
  query: state.query,
  showModal: state.showModal,
});

const mapDispatchToProps = {
  getQuery: getQuery,
  fetchCocktails: fetchCocktails,
  toggleModal: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsPage);
