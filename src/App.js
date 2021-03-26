import React, { Component } from 'react';
import Counter from './components/Counter';

import store from './redux/store';

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
