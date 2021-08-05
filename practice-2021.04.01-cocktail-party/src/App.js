// React imports
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components imports
import Navigation from './components/Navigation';


import routes from './routes'
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
      <Suspense fallback='Loading...'>
      <Switch >
        {routes.map((route) => (<Route {...route}/>))}
     </Switch>
    </Suspense>
        </>
  )
}

export default App
