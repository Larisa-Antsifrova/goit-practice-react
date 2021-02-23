import React from 'react';
import PaintingList from './components/PaintingList/PaintingsList';
import paintings from './paintings.json';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';

// Colors option object
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// Inserting PaintingList component into App
function App() {
  return (
    <div className="container">
      <ColorPicker options={colorPickerOptions} />
      <Panel title="Gallery Paintings">
        <p>Here you will find paintings by our well-known authors.</p>
        <p>Put on some nice music and enjoy!</p>
      </Panel>
      <hr />
      <Panel>
        <p>Panel 2 without a title</p>
      </Panel>
      <hr />
      <PaintingList paintings={paintings} />
    </div>
  );
}

export default App;
