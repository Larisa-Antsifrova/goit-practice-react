import { combineReducers } from 'redux';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
} from './todos-action-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state];
    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: items,
  filter: filter,
});
