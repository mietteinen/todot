import React from 'react';

import EditableField from './EditableField';
import '../styles/TodoItem.css';
import { getIconPath } from '../utilities/utils';

interface TodoItemProps {
    index: number;
    text: string;
    onDelete: () => void;
    onSaveText: (key: number, text: string) => void;
    dragHandleProps: any;
};

const TodoItem: React.FC<TodoItemProps> = ({ index, text, onDelete, onSaveText, dragHandleProps }) => {
    let dragPath = getIconPath('drag-icon');
    let deletePath = getIconPath('delete-icon');

    let fieldText = text ? text : "New Todo Item";
    
    return (
        <li className="todo-list-item">
            <div className="todo-container-left">
                <div {...dragHandleProps}
                     className="li-button"
                     id="drag-div">
                    <img src={dragPath} className="li-icon" alt="Drag Button" />
                </div>
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