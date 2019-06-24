import * as types from './actionTypes';


export function setMovies(movies) {
    return {
        type: types.SET_MOVIES,
        movies: movies
    };
}
