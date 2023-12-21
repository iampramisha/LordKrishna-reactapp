// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ isOpen }) => {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/leela', label: "Krishna's leelas" },
    { path: '/BGquotes', label: 'BG Quotes' },
    { path: '/childhood', label: 'Childhood' },
    { path: '/Hisnames', label: 'His Names' },
    { path: '/questions', label: 'Q/Ans discuss' },
  ];
  if (!isOpen) {
    return null; // Don't render anything if the menu is not open
  }
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            {isOpen ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
