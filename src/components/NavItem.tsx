import React from 'react';

interface NavItemProps {
    icon: string;
    altText: string;
    onClickFunction: (mode: 'light' | 'dark') => void;
};
 
const NavItem: React.FC<NavItemProps> = ({ icon, altText, onClickFunction }) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    /**
     * When the button is clicked, toggle the color mode
     * between light and dark. Then, call the parent's
     * onClickFunction to visually update the color mode.
     */
    const handleClick = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('color-mode', newMode);
        setMode(newMode);
        onClickFunction(newMode);
    }

    return (
        <li className="nav-item">
            <button className="nav-button" onClick={handleClick}>
                <img src={icon} alt={altText} style={{ width: '80%', height: '80%' }} />
            </button>
        </li>
    );
};

export default NavItem;