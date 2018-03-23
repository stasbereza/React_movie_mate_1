import React from 'react';
import MovieCard from 'components/MovieCard';
import movieList from 'movieList';
import './styles.css';

class MovieList extends React.Component {
    render() {
        const movieCards = movieList.map(movieCard => <MovieCard key={movieCard.id} {...movieCard} />);
        
        return (
            <div className="MovieList">
                {movieCards}
            </div>
        );
    }
}

export default MovieList;