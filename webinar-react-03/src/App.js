import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import ToDoList from './components/ToDoList';

import options from './db/options.json';
import todos from './db/todos.json';

class App extends Component {
  state = { todos: todos };

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
        <h2>To Do List</h2>
        <p className="temporary-p">Total: {totalToDoCount}</p>
        <p className="temporary-p">Completed: {completedToDoCount}</p>
        <ToDoList todos={todos} onDeleteToDo={this.deleteToDo} />

        <h2>Counter</h2>
        <Counter />

        <h2>Dropdown</h2>
        <Dropdown />

        <h2>Color Picker</h2>
        <ColorPicker options={options} />
      </>
    );
  }
}

export default App;
