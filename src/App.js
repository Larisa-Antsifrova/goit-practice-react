import React from "react";
import PaintingList from "./components/PaintingsList";
import paintings from "./paintings.json";
import Panel from "./components/Panel";

// Inserting PaintingList component into App
function App() {
  return (
    <div className="container">
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
