import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: string[];
    onAddTodo: (todo: string) => void;
}

const TodoList: React.FC<TodoListProps> = () => {
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        const newItem = `New Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    return (
        <div>
            <ul id="todo-list">
                {items.map((item, index) => (
                    <TodoItem key={index} text={item} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;