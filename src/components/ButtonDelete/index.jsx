import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ButtonDelete extends React.Component {
    render() {
        const { text } = this.props;

        return <button className="ButtonDelete">{text}</button>
    }
}

ButtonDelete.propTypes = {
    text: PropTypes.string.isRequired
};

export default ButtonDelete;