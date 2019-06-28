import React, { Component } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {

  componentDidMount() { }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default App;
