import React, { Component } from 'react';
import { connect } from "react-redux";
import Movie from '../Movie';
import './styles.css';
import ReactLoading from 'react-loading';

class MovieList extends Component {

    renderMovieList() {
        if (this.props.movies && this.props.movies.length) {
            return (
                this.props.movies.map((movie, index) =>
                    <Movie
                        key={movie.imdbID + index}
                        imgUrl={movie.Poster}
                        title={movie.Title}
                        id={movie.imdbID + index}
                    />)
            );
        } else {
            return null;
        }
    }

    render() {
        
        if(this.props.error) {
            return (
                <div className="movie-list movie-list--error">
                    <p className="movie-list__error-text">{this.props.error.msg}</p>
                </div>
            )
        }else {
            if (this.props.isLoading) {
                return (
                    <div className="movie-list movie-list--loading">
                        <ReactLoading
                            className="movie-list__spin"
                            type={'spin'}
                            color={'#022549'}
                            height={'10%'}
                            width={'10%'}
                        />
                    </div>
                );
            } else {
                return (
                    <div className="movie-list movie-list--loaded">
                        {this.renderMovieList()}
                    </div>
                );
            }      
        }
    }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies,
        isLoading: state.moviesReducer.isLoading,
        error: state.moviesReducer.error
    };
};

export default connect(mapStateToProps)(MovieList);