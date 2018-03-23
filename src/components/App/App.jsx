import React from 'react';
import Header from 'components/Header';
import Logo from 'components/Logo';
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import Form from 'components/Form';
import MovieList from 'components/MovieList';
import './App.css';

class App extends React.Component {
    render() {
        
        return (
            <div className="App">
                <Header>
                    <Logo text="Movie mate" />
                    <Navbar menuItemOne="login" menuItemTwo="browse" menuItemThree="about" />
                </Header>
                <Main>
                    <MovieList />
                    <Form input="title" textarea="description" select="rating" />
                </Main>
            </div>
        );
    }
}

export default App;