import React from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = React.useState<string[]>([]);
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('light');

  /**
   * When the color mode changes, update the body's class list
   * to toggle between light and dark mode.
   * @param {('light' | 'dark')} colorMode The current color mode.
   */
  React.useEffect(() => {

    if (colorMode === 'dark') {
      document.body.classList.add('dark-mode');
      console.log('Dark mode activated!');
    } else {
      document.body.classList.remove('dark-mode');
      console.log('Dark mode deactivated!');
    }

  }, [colorMode]);

  /**
   * @param newTodo The new todo to add to the list.
   */
  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  /**
   * @param index The index of the todo to delete.
   */
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div id="app">
      
      {/* Add a navigation bar on top of the main TodoList. */}
      <NavBar onSetColorMode={setColorMode} />

      {/* Make the main TodoList. */}
      <TodoList todos={todos} onAddTodo={addTodo} onDeleteTodo={deleteTodo} />

    </div>
  );
};

export default App;
