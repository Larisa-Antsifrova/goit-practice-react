import React, { Component } from 'react';
import Counter from './components/Counter';

import store from './redux/store';
import { myAction, myAction2 } from './redux/actions';

store.dispatch(myAction(11));
store.dispatch(myAction2);

class App extends Component {
  render() {
    return (
      <>
        <h2>Counter</h2>
        <Counter />
      </>
    );
  }
}

export default App;
