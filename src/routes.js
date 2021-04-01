// импортируем lazy для
import { lazy } from 'react';
import { v4 as uuid } from 'uuid';
// импортируем компоненты страниц
// создаем массив роутов
// экспортируем массив роутов
const routes = [
  {
    key: uuid(),
    exact: true,
    path: '/',
    component: lazy(() => import('./pages/HomePage/HomePage')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/cocktails',
    component: lazy(() => import('./pages/CocktailsPage/CocktailsPage')),
  },
  {
    key: uuid(),
    exact: true,
    path: '/contacts',
    component: lazy(() => import('./pages/ContactsPage/ContactsPage')),
  },
];

export default routes;
