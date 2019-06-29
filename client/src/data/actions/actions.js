import * as types from './actionTypes';
import axios from 'axios';

export const setMovies = (movies) => {
    return {
        type: types.SET_MOVIES,
        movies: movies
    };
}

export const setError = (error) => {
    return {
        type: types.SET_ERROR,
        error: error
    };
}

export const setLoading = (state) => {
    return {
        type: types.SET_LOADING,
        isLoading: state
    };
}

/**
 * fetch movies from server
 * @param keyWord 
 */
export const fetchMovies = (keyWord) => {
    return async dispatch => {
        try {
            const result = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/search?keyword=${keyWord}`);
            if (result && result.data && result.data.length > 0) {
                dispatch(setMovies(result.data));
                dispatch(setLoading(false));
            } else {
                dispatch(setError({ 'msg': 'No matching movies with keyword!!' }));
                dispatch(setMovies([]));
                dispatch(setLoading(false));
            }
        } catch (error) {
            dispatch(setError({ 'msg': "Unable to fetch movies!!" }));
            dispatch(setMovies([]));
            dispatch(setLoading(false));
            return error;
        }
    }
}