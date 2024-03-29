import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import db from "./db/db.json";

function App() {
  return (
    <>
      <Header />
      <Main db={db} />
      <Footer />
    </>
  );
}

export default App;
