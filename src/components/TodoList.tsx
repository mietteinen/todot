import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem';
import '../styles/TodoList.css';
import { Todo } from '../utilities/utils';

interface TodoListProps {
    todos: Todo[];
    onAddTodo: (todo: string) => void;
    onDeleteTodo: (index: number) => void;
    onSaveTodo: (index: number, text: string) => void;
    onReorderTodo: (startIndex: number, endIndex: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, 
                                             onAddTodo, 
                                             onDeleteTodo, 
                                             onSaveTodo, 
                                             onReorderTodo }) => {

    /**
     * When a drag and drop action ends, reorder the todos if necessary.
     * @param { any } result The result of the drag and drop action.
     */
    const handleDragEnd = (result: any) => {
        if (!result.destination) { return; }
        onReorderTodo(result.source.index, result.destination.index);
    };

    return (
        <div className="todo-div">
            {todos.length === 0 ? ( <span id="no-todos">No Todos!</span>
            ) : (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided: any) => (
                            <ul id="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
                                {todos.map((todo, index) => (
                                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                        {(provided: any) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps}>
                                                <TodoItem
                                                    index={index}
                                                    text={todo.value}
                                                    onDelete={() => onDeleteTodo(index)}
                                                    onSaveText={(index: number, text: string) => onSaveTodo(index, text)}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
            <div id="bottom-div">
                <button id="add-button" onClick={() => onAddTodo('New Todo')}>Add Todo</button>
            </div>
        </div>
    );
};

export default TodoList;