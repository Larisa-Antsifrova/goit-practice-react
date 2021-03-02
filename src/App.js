import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import ToDoList from './components/ToDoList';

import options from './db/options.json';
import todos from './db/todos.json';

class App extends Component {
  state = { todos: todos };

  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <>
        <h2>To Do List</h2>
        <ToDoList todos={todos} />

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

// function App() {
//   return (
//     <>
//       <h2>To Do List</h2>
//       <ToDoList />

//       <h2>Counter</h2>
//       <Counter />

//       <h2>Dropdown</h2>
//       <Dropdown />

//       <h2>Color Picker</h2>
//       <ColorPicker options={options} />
//     </>
//   );
// }

// export default App;
