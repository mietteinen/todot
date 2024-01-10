import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: string[];
    onAddTodo: (todo: string) => void;
    onDeleteTodo: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onAddTodo, onDeleteTodo }) => {
    
    const handleDelete = (index: number) => {
        onDeleteTodo(index);
    };

    return (
        <div className="todo-div">
            <ul id="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} text={todo} onDelete={() => handleDelete(index)} />
                ))}
            </ul>
            <button onClick={() => onAddTodo('New Todo')}>Add Todo</button>
        </div>
    );
};

export default TodoList;