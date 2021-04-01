import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import of components
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage/HomePage';
import CocktailsPage from './pages/CocktailsPage/CocktailsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
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
      <Navigation />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/cocktails' component={CocktailsPage}/>
        <Route path='/contacts' component={ContactsPage}/>
     </Switch>
    
      
      
    </>
  )
}

export default App
