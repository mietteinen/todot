import React from 'react';
import NavItem from './NavItem';
import { toggleDarkMode } from '../utilities/buttonFunctions';

const NavBar = () => {
    return (
        <nav id="nav-bar">
            <ul id="nav-list">
                <NavItem icon="/assets/icons/mode.png" altText="Dark Mode" onClickFunction={toggleDarkMode} />
            </ul>
        </nav>
    );
};

export default NavBar;