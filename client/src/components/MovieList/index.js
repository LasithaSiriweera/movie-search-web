import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../Movie';
import * as _ from 'lodash';
import './styles.css';

class MovieList extends Component {

    constructor(props) {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.fetchMoviesByKeyWord('king');
    }

    fetchMoviesByKeyWord = async (keyWord) => {
        try {
            const movies = await axios.get(`http://localhost:3001/api/search?keyword=kin`);
            this.setState({ movies: movies.data })
        } catch (error) {
            this.setState({ movies: [] });
        }
    }

    render() {
        let movies = []
        _.forEach(this.state.movies, function (movie: any) {
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

export default MovieList;
