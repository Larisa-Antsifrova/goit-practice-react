import { configureStore } from '@reduxjs/toolkit';
import {getQueryReducer, fetchCocktailsReducer} from './cocktails/cocktails-reducers'

const store = configureStore({
  reducer: {
    query: getQueryReducer,
    drinks: fetchCocktailsReducer

  }
});

export { store };
