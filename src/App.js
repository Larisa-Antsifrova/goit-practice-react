import React from 'react';

// Import of components
import Navigation from './components/Navigation';
import CocktailsPage from './pages/CocktailsPage/CocktailsPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
// импорты
// переключатель, роут, редирект
// массив роутов
// {connect}
// экшены и редюсеры

// import { getCocktail } from './services/cocktailsApi'
// getCocktail('margarita').then((d) => console.log(d))

function App() {
  return (
    <>
      <Navigation/>
      <h1>Cocktail Party</h1>
    </>
  )
}

export default App
