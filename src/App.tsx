import React from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = React.useState<string[]>([]);
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    () => (localStorage.getItem('colorMode') as 'light' | 'dark') || 'light'
  );

  // Initialize the todos state with the todos from local storage.
  React.useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      console.log('Todos loaded from local storage!');
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  /**
   * When the todos change, update the local storage with the new todos.
   * @param {string[]} todos The current list of todos.
   */
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos updated in local storage!');
  }, [todos]);

  /**
   * When the color mode changes, update the body's class list
   * to toggle between light and dark mode.
   * @param {('light' | 'dark')} colorMode The current color mode.
   */
  React.useEffect(() => {

    if (colorMode === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('colorMode', 'dark');
      console.log('Dark mode activated!');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('colorMode', 'light');
      console.log('Dark mode deactivated!');
    }

  }, [colorMode]);

  /**
   * @param newTodo The new todo to add to the list.
   */
  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
    console.log('Todo added: ' + newTodo);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  /**
   * @param index The index of the todo to delete.
   */
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    console.log('Todo deleted!');
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const saveTodo = (index: number, text: string) => {
    console.log('Should be saving');
    let newTodos = [...todos];
    newTodos[index] = text;
    setTodos(newTodos);
    //localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div id="app">
      
      {/* Add a navigation bar on top of the main TodoList. */}
      <NavBar onSetColorMode={setColorMode} />

      {/* Make the main TodoList. */}
      <TodoList todos={todos} onAddTodo={addTodo} onDeleteTodo={deleteTodo} onSaveTodo={saveTodo} />

    </div>
  );
};

export default App;
