import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
} from './todos-action-types';
import shortid from 'shortid';

const addTodo = text => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = id => ({
  type: DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { addTodo, deleteTodo, changeFilter };
