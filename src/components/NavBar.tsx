import React from 'react';

import NavItem from './NavItem';
import '../styles/NavBar.css';
import { getIconPath } from '../utilities/utils';

interface NavBarProps {
    onSetColorMode: (mode: 'light' | 'dark') => void;
};

const NavBar: React.FC<NavBarProps> = ({ onSetColorMode }) => {
    let modePath = getIconPath("mode-icon")

    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <NavItem icon={modePath} altText="Dark Mode" onClickFunction={onSetColorMode} />
            </ul>
        </nav>
    );
};

export default NavBar;