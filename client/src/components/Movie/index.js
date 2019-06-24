import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.css';

class Movie extends Component {

    componentDidMount() { }

    render() {
        return (
            <div className="Movie">
                <img key={'img-' + this.props.id} className="movie-img" src={this.props.imgUrl} alt="My Awesome Image"/>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Movie;

Movie.propTypes = {
    imgUrl: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
};
