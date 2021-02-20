import React from "react";
import styles from "./Header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <nav>
        <a href="#">LOGO</a>

        <ul className={styles.navList}>
          <li>
            <a href="#">First</a>
          </li>
          <li>
            <a href="#">Second</a>
          </li>
          <li>
            <a href="#">Third</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
