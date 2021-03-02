import React from 'react';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';

import options from './db/options.json';

function App() {
  return (
    <>
      <h2>Counter</h2>
      <Counter />
      <h2>Dropdown</h2>
      <Dropdown />
      <h2>Color Picker</h2>
      <ColorPicker options={options} />
    </>
  );
}

export default App;
