import { createReducer } from '@reduxjs/toolkit';
import { getQuery, fetchCocktails, toggleModal } from './cocktails-actions';

const getQueryReducer = createReducer('', {
  [getQuery]: (_, { payload }) => payload,
});

const fetchCocktailsReducer = createReducer([], {
  [fetchCocktails]: (_, { payload }) => payload,
});

const modalReducer = createReducer(false, {
  [toggleModal]: (_, { payload }) => payload,
});

export { getQueryReducer, fetchCocktailsReducer, modalReducer };
