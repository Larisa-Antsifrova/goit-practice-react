import { createReducer } from '@reduxjs/toolkit';
import { getQuery } from './cocktails-actions';

const getQueryReducer = createReducer('', {
  [getQuery]: (_, { payload }) => payload,
});

export { getQueryReducer };
