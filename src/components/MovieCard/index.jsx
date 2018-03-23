import React from 'react';
import PropTypes from 'prop-types';
import ButtonDelete from 'components/ButtonDelete';
import './styles.css';

class MovieCard extends React.Component {
    render() {
        const { title, desc, rating, genre } = this.props;
        
        return (
            <div className="MovieCard">
                <ButtonDelete text="delete" />  
                <h2 className="MovieCard__title">{title}</h2>
                <p className="MovieCard__desc">{desc}</p>
                <p className="MovieCard__rating">Rating: {rating}/10</p>
                <ul className="MovieCard__genre">{genre.map(item => <li className="MovieCard__item" key={item}>{item}</li>)}</ul>
            </div>
        );
    }
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired
};

export default MovieCard;