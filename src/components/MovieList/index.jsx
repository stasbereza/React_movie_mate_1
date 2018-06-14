import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import './styles.css';

const MovieList = ({ movieCards, onDeleteMovieCard }) => (
  <div className="MovieList">
    {movieCards.map(movieCard => (
      <MovieCard
        key={movieCard.id}
        {...movieCard}
        onClick={() => {onDeleteMovieCard(movieCard.id)}}
      />
    ))}
  </div>
);

// {movieCards.map(movieCard => <MovieCard key={movieCard.id} {...movieCard} />)}

MovieList.propTypes = {
  movieCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteMovieCard: PropTypes.func.isRequired,
};

export default MovieList;

