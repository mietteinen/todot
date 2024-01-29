import React from 'react';
import NavItem from './NavItem';

interface NavBarProps {
    onSetColorMode: (mode: 'light' | 'dark') => void;
};

const NavBar: React.FC<NavBarProps> = ({ onSetColorMode }) => {
    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <NavItem icon="/assets/icons/mode.png" altText="Dark Mode" onClickFunction={onSetColorMode} />
            </ul>
        </nav>
    );
};

export default NavBar;