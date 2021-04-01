import { createAction } from '@reduxjs/toolkit';

const getQuery = createAction('cocktails/getQueryValue');

const fetchCocktails = createAction('cocktails/fetchCocktails');

const toggleModal = createAction('cocktails/toggleModal');
export { getQuery, fetchCocktails, toggleModal };
