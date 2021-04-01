import { configureStore } from '@reduxjs/toolkit';
import {getQueryReducer, fetchCocktailsReducer, modalReducer} from './cocktails/cocktails-reducers'

const store = configureStore({
  reducer: {
    query: getQueryReducer,
    drinks: fetchCocktailsReducer,
    showModal: modalReducer

  }
});

export { store };
