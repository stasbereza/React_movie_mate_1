import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './styles.css';

const MovieCard =({ title, desc, rating, genres, onClick }) => (
  <div className="MovieCard">
    <h2 className="MovieCard__title">{title}</h2>
    <p className="MovieCard__desc">{desc}</p>
    <p className="MovieCard__rating">Rating: {rating}/10</p>
    <ul className="MovieCard__genre">
      {genres.map(item => <li className="MovieCard__item" key={item}>{item}</li>)}
    </ul>
    <Button onClick={onClick} text="delete" cls="ButtonDelete" />
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      genre: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

MovieCard.defaultProps = {
  genres: []
}

export default MovieCard;
