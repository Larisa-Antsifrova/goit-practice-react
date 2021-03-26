import { combineReducers } from 'redux';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return state + payload;
    case 'counter/Decrement':
      return state - payload < 0 ? 0 : state - payload;
    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
