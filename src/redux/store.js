import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// Another heavier variant withouth combining reducers
// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value:
//             state.counter.value - payload < 0
//               ? 0
//               : state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
