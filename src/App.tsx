import React from 'react';
import DarkModeButton from './components/DarkModeButton';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const toggleDarkMode = () => {
    console.log('Toggling dark mode.');
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
      <DarkModeButton onToggleDarkMode={toggleDarkMode} />
      <TodoList todos={todos} onAddTodo={addTodo} />
    </div>
  );
}

export default App;
