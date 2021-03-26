import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-action-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
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
