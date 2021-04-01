// импортируем функцию создания стора
import { configureStore } from '@reduxjs/toolkit';
import {getQueryReducer} from './cocktails/cocktails-reducers'

const store = configureStore({
  reducer: {
    query: getQueryReducer,

  }
});

export { store };
// экспортируем стор