import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ match }) => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to={match.url}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}cocktails`}>Coctails</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}contacts`}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
