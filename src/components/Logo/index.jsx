import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Logo extends React.Component {
    render() {
        const { text } = this.props;
        
        return <h1 className="Logo">{text}</h1>;
    }
}

Logo.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Logo; 