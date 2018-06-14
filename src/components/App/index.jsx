import React, { Component } from "react";
import Header from "components/Header";
import Main from "components/Main";
import AddMovieCardForm from "components/AddMovieCardForm";
import MovieList from "components/MovieList";
import movieBase from "movieBase";
import v4 from "uuid/v4";
import "./index.css";

export default class App extends Component {
  state = {
    movieCards: [...movieBase]
  };

  addMovieCard = ({ title, desc, rating, genres }) => {
    const movieCard = {
      id: v4(),
      title,
      desc,
      rating,
      genres
    };

    if (movieCard.title === '' || movieCard.desc === '') {
      alert('Please, fill out form fields!');
      return;
    }

    this.setState({
      movieCards: [...this.state.movieCards, movieCard]
    });
  };

  deleteMovieCard = id => {
    this.setState({
      movieCards: this.state.movieCards.filter(movieCard => movieCard.id !== id)
    });
  };

  render() {
    const { movieCards } = this.state;

    return (
      <div className="App">
        <Header />
        <Main>
          <MovieList
            movieCards={movieCards}
            onDeleteMovieCard={this.deleteMovieCard}
          />
          <AddMovieCardForm onFormSubmit={this.addMovieCard} />
        </Main>
      </div>
    );
  }
}
