import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../data/actions/actions';
import './styles.css';

class SearchBar extends Component {
    timeout;

    onChangedKeyWord = async (event) => {
        const keyword = event.target.value;
        this.props.setError(null);
        if (keyword && keyword.length >= 3) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.props.setLoading(true);
                this.props.fetchMovies(keyword);
            }, 300);
        } else {
            this.props.setMovies([]);
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
        isLoading: state.moviesReducer.isLoading,
        error: state.moviesReducer.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setMovies: (movies) => dispatch(actions.setMovies(movies)),
        setError: (error) => dispatch(actions.setError(error)),
        fetchMovies: (keyWord) => dispatch(actions.fetchMovies(keyWord)),
        setLoading: (state) => dispatch(actions.setLoading(state)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

