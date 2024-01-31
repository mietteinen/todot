import React from 'react';
import { getIconPath } from '../utilities/utils';
import EditableField from './EditableField';

interface TodoItemProps {
    key: number;
    text: string;
    onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, onDelete }) => {
    let dragPath = getIconPath('drag-icon');
    let deletePath = getIconPath('delete-icon');
    
    return (
        <li className="todo-list-item">
            <div className="todo-container-left">
                <button className="li-button">
                    <img src={dragPath} className="li-icon" alt="Drag Button" />
                </button>
            </div>
            <div className="todo-container-center">
                <EditableField initialText="New Todo Item" />
            </div>
            <div className="todo-container-right">
                <button className="li-button" onClick={onDelete}>
                    <img src={deletePath} className="li-icon" alt="Delete Button" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;