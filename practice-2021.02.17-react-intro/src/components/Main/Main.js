import React from "react";
import styles from "./Main.module.css";

function Main({ db }) {
  const items = Object.values(db);
  return (
    <main>
      <div className="container">
        <h1 className={styles.title}>React. Intro lecture.</h1>
        <p>We will be friends soon!</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
