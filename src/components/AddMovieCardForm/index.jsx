import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectRating from 'components/SelectRating';
import CheckboxGenres from 'components/CheckboxGenres';
import Button from 'components/Button';
import "./styles.css";

const INITIAL_STATE = {
  title: '',
  desc: '',
  rating: '1',
};

const genres = ['drama', 'crime', 'comedy', 'romance'];

export default class AddMovieCardForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {};

  state = ({ ...INITIAL_STATE });

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    console.log("componentWillMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const movieCard = {
      ...this.state,
      genres: Array.from(this.selectedCheckboxes)
    };

    this.props.onFormSubmit(movieCard);

    this.setState({ ...INITIAL_STATE });
  };

  createCheckbox = label => (
    <CheckboxGenres
      key={label}
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
    />
  );

  createCheckboxes = () => (
    genres.map(this.createCheckbox)
  );

  render() {
    const { title, desc, rating } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <label htmlFor="title" className="Form__label">
          title
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
            className="Form__input"
          />
        </label>
        <label htmlFor="description" className="Form__label">
          description
          <textarea
            type="text"
            name="desc"
            value={desc}
            onChange={this.handleInputChange}
            className="Form__textarea"
            rows="8"
          />
        </label>
        <SelectRating name="rating" value={rating} onChange={this.handleInputChange} />
        {/* <div className="Form__genres">
          {inputGenres.map(genre =>
          <label htmlFor="genre" key={genre}>
            <input
              type="checkbox"
              name="genres"
              value={genre}
              onChange={this.handleInputChange}
            />
            {genre}
          </label>
          )}
        </div> */}
        <div className="Form__genres">
          {this.createCheckboxes()}
        </div>
        <Button type="submit" text="submit" cls="ButtonSubmit" />
      </form>
    );
  }
}
