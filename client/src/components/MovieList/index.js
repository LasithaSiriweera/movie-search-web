import React, { Component } from 'react';
import { connect } from "react-redux";
import Movie from '../Movie';
import * as _ from 'lodash';
import './styles.css';
import ReactLoading from 'react-loading';

class MovieList extends Component {

    render() {
        const movies = [];
        let count = 0;
        _.forEach(this.props.movies, function (movie) {
            movies.push(
                <Movie
                    key={movie.imdbID + count}
                    imgUrl={movie.Poster}
                    title={movie.Title}
                    id={movie.imdbID + count}
                />
            )
            count++;
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