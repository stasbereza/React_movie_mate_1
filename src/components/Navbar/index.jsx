import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Navbar extends React.Component {
    render() {
        const { menuItemOne, menuItemTwo, menuItemThree } = this.props; 

        return (
            <ul className="Navbar">
                <li className="Navbar__elem">
                    <a className="Navbar__link" href="">{menuItemOne}</a>
                </li>
                <li className="Navbar__elem">
                    <a className="Navbar__link" href="">{menuItemTwo}</a>
                </li>
                <li className="Navbar__elem">
                    <a className="Navbar__link" href="">{menuItemThree}</a>
                </li>
            </ul>
        );
    }
}
Navbar.propTypes = {
    menuItemOne: PropTypes.string.isRequired,
    menuItemTwo: PropTypes.string.isRequired,
    menuItemThree: PropTypes.string.isRequired,
};

export default Navbar;