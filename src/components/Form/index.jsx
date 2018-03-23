import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Form extends React.Component {
    render() {
        const { input, textarea, select } = this.props;
        return (
            <form className="Form">
                <label className="Form__label">
                    {input}
                    <input type="text" className="Form__input"/>
                </label>
                <label className="Form__label">
                    {textarea}
                    <textarea type="text" className="Form__textarea" rows="8"></textarea>
                </label>
                <label className="Form__label">
                    {select}
                    <select className="Form__select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <button className="ButtonSubmit" type="submit">submit</button>
            </form> 
        );
    }
}
Form.propTypes = {
    input: PropTypes.string.isRequired,
    textarea: PropTypes.string.isRequired,
    select: PropTypes.string.isRequired
};

export default Form;