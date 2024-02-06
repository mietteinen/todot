import React from 'react';
import { getIconPath } from '../utilities/utils';
import EditableField from './EditableField';

interface TodoItemProps {
    index: number;
    text: string;
    onDelete: () => void;
    onSaveText: (key: number, text: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ index, text, onDelete, onSaveText }) => {
    let dragPath = getIconPath('drag-icon');
    let deletePath = getIconPath('delete-icon');

    let fieldText = text ? text : "New Todo Item";
    
    return (
        <li className="todo-list-item">
            <div className="todo-container-left">
                <button className="li-button">
                    <img src={dragPath} className="li-icon" alt="Drag Button" />
                </button>
            </div>
            <div className="todo-container-center">
                <EditableField itemKey={index} initialText={fieldText} onSave={onSaveText} />
            </div>
            <div className="todo-container-right">
                <button className="li-button" data-testid="Delete" onClick={onDelete}>
                    <img src={deletePath} className="li-icon" alt="Delete Button" />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;