import React from 'react';

interface NavItemProps {
    icon: string;
    altText: string;
    onClickFunction: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ icon, altText, onClickFunction }) => {
    return (
        <li className="nav-item">
            <button className="nav-button" onClick={onClickFunction}>
                <img src={icon} alt={altText} style={{ width: '80%', height: '80%' }} />
            </button>
        </li>
    );
};

export default NavItem;