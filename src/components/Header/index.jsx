import React from 'react';
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <Logo text="Movie mate" />
                <Navbar menuItemOne="login" menuItemTwo="browse" menuItemThree="about" />
            </header>
        );    
    }
}

export default Header;