import React from 'react';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                {this.props.children}
            </header>
        );    
    }
}

export default Header;