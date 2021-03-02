import React from 'react';

import styles from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteToDo }) => (
  <ul className={styles.TodoList}>
    {todos.map(({ id, text }) => (
      <li key={id} className={styles.TodoList__item}>
        <p className={styles.TodoList__text}>{text}</p>
        <button className={styles.btn} onClick={() => onDeleteToDo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
