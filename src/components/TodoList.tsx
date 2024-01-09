import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: string[];
    onAddTodo: (todo: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onAddTodo }) => {

    return (
        <div className="todo-div">
            <ul id="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} text={todo} />
                ))}
            </ul>
            <button onClick={() => onAddTodo('New Todo')}>Add Todo</button>
        </div>
    )
}

export default TodoList;