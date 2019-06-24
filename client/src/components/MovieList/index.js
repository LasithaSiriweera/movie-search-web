import React, { Component } from 'react';
import { connect } from "react-redux";
import Movie from '../Movie';
import * as _ from 'lodash';
import './styles.css';

class MovieList extends Component {

    render() {
        let movies = []
        _.forEach(this.props.movies, function (movie: any) {
            movies.push(
                <Movie
                    key={movie.imdbID}
                    imgUrl={movie.Poster}
                    title={movie.Title}
                    id={movie.imdbID}
                />
            )
        });
        return (
            <div className="Movies">
                {movies}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies
    };
};

export default connect(mapStateToProps)(MovieList)