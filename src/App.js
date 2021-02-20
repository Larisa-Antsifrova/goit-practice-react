//  Getting the required imports
import "./App.css";
import Page from "./components/Page.jsx";

// Getting today's date
const today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

// Composing App
function App() {
  return (
    <div className="App container">
      <Page title="This is home page." date={today} />
    </div>
  );
}

export default App;
