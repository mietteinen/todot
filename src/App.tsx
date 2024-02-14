import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import './styles/global.css';
import { Todo } from './utilities/utils';

function App() {

  const [todos, setTodos] = React.useState<Todo[]>([])
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    () => (localStorage.getItem('color-mode') as 'light' | 'dark') || 'light'
  );

  // Initialize the todos state with the todos from local storage.
  React.useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  /**
   * When the todos change, update the local storage with the new todos.
   * @param {string[]} todos The current list of todos.
   */
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * When the color mode changes, update the body's class list
   * to toggle between light and dark mode.
   * @param {('light' | 'dark')} colorMode The current color mode.
   */
  React.useEffect(() => {
    if (colorMode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [colorMode]);

  /**
   * 
   * @param {('light' | 'dark')} mode The color mode to change to.
   */
  const changeColorMode = (mode: 'light' | 'dark') => {
    localStorage.setItem('color-mode', mode);
    setColorMode(mode);
  }

  /**
   * @param newTodo The new todo to add to the list.
   */
  const addTodo = (newTodoValue: string) => {
    let newTodo: Todo = {
      id: uuidv4(),
      value: newTodoValue
    }
    let newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  /**
   * @param index The index of the todo to delete.
   */
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const saveTodo = (index: number, text: string) => {
    let newTodos = [...todos];
    newTodos[index].value = text;

    setTodos(newTodos);    
  }

  const reorderTodos = (startIndex: number, endIndex: number) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    setTodos(result);
    localStorage.setItem('todos', JSON.stringify(result));
  }

  return (
    <div id="app">
      
      {/* Add a navigation bar on top of the main TodoList. */}
      <NavBar onSetColorMode={changeColorMode} />

      {/* Make the main TodoList. */}
      <TodoList todos={todos} onAddTodo={addTodo} onDeleteTodo={deleteTodo} onSaveTodo={saveTodo} onReorderTodo={reorderTodos} />

    </div>
  );
};

export default App;
