import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../data/actions/actions';
import axios from 'axios';
import './styles.css';

class SearchBar extends Component {

    fetchMoviesByKeyWord = async (event) => {
        try {
            const keyword = event.target.value;
            const movies = await axios.get(`http://localhost:3001/api/search?keyword=${keyword}`);
            this.props.setMovies(movies.data);
        } catch (error) {
            this.props.setMovies([]);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input className="search-input" placeholder="Move Name" onChange={(event) => {this.fetchMoviesByKeyWord(event)}}></input>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setMovies: (movies) => dispatch(actions.setMovies(movies)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

