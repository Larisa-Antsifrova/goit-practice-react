import { createReducer } from '@reduxjs/toolkit';
import { getQuery, fetchCocktails } from './cocktails-actions';

const getQueryReducer = createReducer('', {
  [getQuery]: (_, { payload }) => payload,
});

const fetchCocktailsReducer = createReducer([], {
  [fetchCocktails]: (_, { payload }) => payload,
});

export { getQueryReducer, fetchCocktailsReducer };
