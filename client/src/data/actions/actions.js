import * as types from './actionTypes';


export function setMovies(movies) {
    return {
        type: types.SET_MOVIES,
        movies: movies
    };
}

export function setLoading(state) {
    return {
        type: types.SET_LOADING,
        isLoading: state
    };
}
