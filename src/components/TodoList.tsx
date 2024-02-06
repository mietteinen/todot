import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: string[];
    onAddTodo: (todo: string) => void;
    onDeleteTodo: (index: number) => void;
    onSaveTodo: (index: number, text: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onAddTodo, onDeleteTodo, onSaveTodo }) => {

    const generateKey = (): React.Key => {
        return uuidv4();
    }

    const handleDelete = (index: number) => {
        onDeleteTodo(index);
    };

    const handleSave = (key: number, text: string) => {
        todos[key] = text;
        onSaveTodo(key, text);
    };

    return (
        <div className="todo-div">
            {todos.length === 0 ? ( <span id="no-todos">No Todos!</span> 
            ) : (
                <ul id="todo-list">
                    {todos.map((todo, index) => (
                        <TodoItem key={generateKey()} index={index} text={todo} onDelete={() => handleDelete(index)} onSaveText={handleSave} />
                    ))}
                </ul>
            )}
            <button onClick={() => onAddTodo('New Todo')}>Add Todo</button>
        </div>
    );
};

export default TodoList;