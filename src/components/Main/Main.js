import React, { Fragment } from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main>
      <div className="container">
        <h1 className={styles.title}>React. Intro lecture.</h1>
        <p>We will be friends soon!</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
