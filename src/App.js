import React from "react";
import PaintingList from "./components/PaintingsList";
import paintings from "./paintings.json";

// Inserting PaintingList component into App
function App() {
  return (
    <div className="container">
      <PaintingList paintings={paintings} />
    </div>
  );
}

export default App;
