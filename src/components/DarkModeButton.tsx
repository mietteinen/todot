import React from 'react';

interface DarkModeButtonProps {
    onToggleDarkMode: () => void;
};

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ onToggleDarkMode }) => {
    return (
        <button onClick={onToggleDarkMode}>Toggle Dark Mode</button>
    );
};

export default DarkModeButton;