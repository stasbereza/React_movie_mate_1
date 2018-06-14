import React from 'react';
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
import './styles.css';

const Header = () => (
  <header className="Header">
    <Logo text="Movie mate" />
    <Navbar />
  </header>
);

export default Header;
