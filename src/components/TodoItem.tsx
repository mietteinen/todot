import React from 'react';

interface TodoItemProps {
    key: number;
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    return (
        <li className="todo-list-item">
            <div className="todo-container-left">
                <button className="drag-button">
                    <img src="assets/icons/drag.png" className="drag-icon" alt="" />
                </button>
            </div>
            <div className="todo-container-center">
                <span className="item-text">{text}</span>
            </div>
            <div className="todo-container-right">
                <button className="delete-button">
                    <img src="assets/icons/delete.png" className="delete-icon" alt="" />
                </button>
            </div>
        </li>
    );
}

export default TodoItem;