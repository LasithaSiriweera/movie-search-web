import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../data/actions/actions';
import { debounce } from 'lodash'
import './styles.css';

class SearchBar extends Component {

    /**
     * start searching movies after 300 milliseconds
     */
    searchMovies = debounce((keyWord) => {
        this.props.setLoading(true);
        this.props.fetchMovies(keyWord);
    }, 300);

    onChangedKeyWord = (event) => {
        const keyWord = event.target.value;
        this.props.setError(null);
        if (keyWord && keyWord.length >= 3) {
            this.searchMovies(keyWord);
        } else {
            this.props.setMovies([]);
        }
    }

    render() {
        return (
            <div className="search">
                <h2 className="search__title">Search Movies</h2>
                <input className="search__input" placeholder="Key Word" onChange={(event) => { this.onChangedKeyWord(event) }}></input>
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

