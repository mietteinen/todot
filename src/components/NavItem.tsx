import React from 'react';

interface NavItemProps {
    icon: string;
    altText: string;
    onClickFunction: (mode: 'light' | 'dark') => void;
};
 
const NavItem: React.FC<NavItemProps> = ({ icon, altText, onClickFunction }) => {

    const findMode = () => {
        if (localStorage.getItem('color-mode') === 'dark') {
            onClickFunction('light');
        } else {
            onClickFunction('dark');
        }
    }

    return (
        <li className="nav-item">
            <button className="nav-button" onClick={findMode}>
                <img src={icon} alt={altText} style={{ width: '80%', height: '80%' }} />
            </button>
        </li>
    );
};

export default NavItem;