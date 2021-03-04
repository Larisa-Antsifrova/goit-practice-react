import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import Form from './components/Form';

import todos from './db/todos.json';
class App extends Component {
  state = {
    todos: todos,
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  deleteToDo = toDoId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== toDoId),
      };
    });
  };

  render() {
    const { todos } = this.state;
    const totalToDoCount = todos.length;
    const completedToDoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <h2>Form</h2>
        <Form onSubmit={this.formSubmitHandler} />

        <h2>To Do List</h2>
        <p className="temporary-p">Total: {totalToDoCount}</p>
        <p className="temporary-p">Completed: {completedToDoCount}</p>
        <ToDoList todos={todos} onDeleteToDo={this.deleteToDo} />
      </>
    );
  }
}

export default App;
