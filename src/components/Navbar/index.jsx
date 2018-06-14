import React from 'react';
import './styles.css';

const menu = ['login', 'browse', 'about'];

const Navbar = () => (
    <ul className="Navbar">
      {menu.map(menuItem =>
        <li key={menuItem} className="Navbar__elem">
          <a className="Navbar__link" href="">{menuItem}</a>
        </li>
        )}
    </ul>
    );

export default Navbar;



