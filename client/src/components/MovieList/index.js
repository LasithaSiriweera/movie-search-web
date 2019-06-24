import React, { Component } from 'react';
import { connect } from "react-redux";
import Movie from '../Movie';
import * as _ from 'lodash';
import './styles.css';
import ReactLoading from 'react-loading';

class MovieList extends Component {

    render() {
        let movies = []
        _.forEach(this.props.movies, function (movie) {
            const timestamp = Date.now();
            movies.push(
                <Movie
                    key={movie.imdbID + timestamp}
                    imgUrl={movie.Poster}
                    title={movie.Title}
                    id={movie.imdbID}
                />
            )
        });
        if (this.props.isLoading) {
            return (
                <div className="Loading">
                    <ReactLoading
                        className="spin"
                        type={'spin'}
                        color={'#022549'}
                        height={'10%'}
                        width={'10%'}
                    />
                </div>
            );
        } else {
            return (
                <div className="Movies">
                    {movies}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies,
        isLoading: state.moviesReducer.isLoading
    };
};

export default connect(mapStateToProps)(MovieList)