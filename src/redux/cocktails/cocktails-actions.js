import { createAction } from '@reduxjs/toolkit';

const getQuery = createAction('cocktails/getQueryValue', value => ({
  payload: value,
}));

export { getQuery };
