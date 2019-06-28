import React, { Component } from 'react';
import PropTypes from "prop-types";
import './styles.css';
import defaultImage from '../../assets/imgs/default-movie.jpg'

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: 'N/A'
        }
    }

    componentDidMount() {
        this.setState({
            imgUrl: this.props.imgUrl
        });
    }

    /**
     * Handle image loading error
     */
    onError() {
        this.setState({
            imgUrl: defaultImage
        });
    }

    render() {
        return (
            <div className="movie">
                <img key={'img-' + this.props.id} className="movie__img" src={this.state.imgUrl} onError={this.onError.bind(this)} alt="Movie Poster not loaded"/>
                <p className="movie__title">{this.props.title}</p>
            </div >
        );
    }
}

export default Movie;

Movie.propTypes = {
    imgUrl: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
};
