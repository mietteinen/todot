import React from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div id="app">
      
      {/* Add a navigation bar on top of the main TodoList. */}
      <NavBar />

      {/* Make the main TodoList. */}
      <TodoList todos={todos} onAddTodo={addTodo} onDeleteTodo={deleteTodo} />

    </div>
  );
};

export default App;
