import React from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Form from 'components/Form';
import MovieList from 'components/MovieList';
import './index.css';

class App extends React.Component {
    render() {
        
        return (
            <div className="App">
                <Header />
                <Main> 
                    <MovieList />
                    <Form input="title" textarea="description" select="rating" />
                </Main>
            </div>
        );
    }
}

export default App;