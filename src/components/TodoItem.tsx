import React from 'react';

interface TodoItemProps {
    key: number;
    text: string;
    onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete }) => {
    return (
        <li className="todo-list-item">
            <div className="todo-container-left">
                <button className="li-button">
                    <img src="/assets/icons/drag.png" className="li-icon" alt="Drag Button" />
                </button>
            </div>
            <div className="todo-container-center">
                <span className="item-text">{text}</span>
            </div>
            <div className="todo-container-right">
                <button className="li-button" onClick={onDelete}>
                    <img src="/assets/icons/delete.png" className="li-icon" alt="Delete Button" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;