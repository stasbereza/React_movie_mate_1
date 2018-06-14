import React from 'react';
import PropTypes from 'prop-types';

const makeOptions = num => {
  const elements = [];

  for (let i = 1; i <= num; i += 1) {
    elements.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return elements;
};

const SelectRating = ({ name, value, onChange }) => (
  <label
    htmlFor="rating"
    className="Form__label">
    rating
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="Form__select">
      {makeOptions(10)}
    </select>
  </label>
)

SelectRating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SelectRating;





