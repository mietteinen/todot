import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {

    describe('Rendering', () => {
    
        it('renders Dark Mode button with correct icon', () => {
            const { getByAltText } = render(<NavBar onSetColorMode={() => {}} />);
            const modeButton = getByAltText('Dark Mode');
            expect(modeButton).toBeInTheDocument();
        });
    });

    describe('Interactions', () => {

        it('runs the onSetColorMode function when the Dark Mode button is clicked', () => {
            const onSetColorModeMock = jest.fn();
            const { getByAltText } = render(<NavBar onSetColorMode={onSetColorModeMock} />);
            const modeButton = getByAltText('Dark Mode');
            
            expect(onSetColorModeMock).not.toHaveBeenCalled();
            fireEvent.click(modeButton);
            expect(onSetColorModeMock).toHaveBeenCalled();
        });
    });
});