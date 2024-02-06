import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {

    describe('Rendering', () => {
    
        it('renders TodoList component with given Todo items', () => {
            const { getByText } = render(<TodoList todos={['todo1', 'todo2']} onAddTodo={() => {}} onDeleteTodo={() => {}} onSaveTodo={() => {}} />);
            expect(getByText('todo1')).toBeInTheDocument();
            expect(getByText('todo2')).toBeInTheDocument();
        });

        it('renders TodoList component with no Todo items', () => {
            const { getByText } = render(<TodoList todos={[]} onAddTodo={() => {}} onDeleteTodo={() => {}} onSaveTodo={() => {}} />);
            expect(getByText('No Todos!')).toBeInTheDocument();
        });
    });

    describe('Interactions', () => {

        it('adds a new Todo item when the add button is clicked', () => {
            const onAddTodoMock = jest.fn();
            const onDeleteTodoMock = jest.fn();
            const { getByText } = render(<TodoList todos={['todo1']} onAddTodo={onAddTodoMock} onDeleteTodo={onDeleteTodoMock} onSaveTodo={() => {}} />);
            
            expect(onAddTodoMock).not.toHaveBeenCalled();
            expect(onDeleteTodoMock).not.toHaveBeenCalled();

            fireEvent.click(getByText('Add Todo'));
            expect(onAddTodoMock).toHaveBeenCalled();

            fireEvent.click(getByTestId(document.body, 'Delete'));
            expect(onDeleteTodoMock).toHaveBeenCalled();
        });
    });
});
