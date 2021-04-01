import { createAction } from '@reduxjs/toolkit';

const getQuery = createAction('cocktails/getQueryValue');

const fetchCocktails = createAction('cocktails/fetchCocktails');

export { getQuery, fetchCocktails };
