import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../data/actions/actions';
import axios from 'axios';
import './styles.css';

class SearchBar extends Component {
    timeout;

    onChangedKeyWord = async (event) => {
        try {
            const keyword = event.target.value;
            if (keyword && keyword.length >= 3) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.fetchMoviesByKeyWord(keyword);
                }, 300);
            } else {
                this.props.setMovies([]);
            }
        } catch (error) {
            this.props.setMovies([]);
        }
    }

    /**
     * Fetch movies using key word
     */
    fetchMoviesByKeyWord = async (keyword) => {
        try {
            this.props.setLoading(true);
            const movies = await axios.get(`http://localhost:3001/api/search?keyword=${keyword}`);
            this.props.setMovies(movies.data);
            this.props.setLoading(false);
        } catch (error) {
            this.props.setMovies([]);
            this.props.setLoading(false);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <h2 className="title">Search Movies</h2>
                <input className="search-input" placeholder="Key Word" onChange={(event) => { this.onChangedKeyWord(event) }}></input>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies,
        isLoading: state.moviesReducer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setMovies: (movies) => dispatch(actions.setMovies(movies)),
        setLoading: (state) => dispatch(actions.setLoading(state)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

