
import * as types from '../actions/actionTypes';

let initialState = {
    movies: [],
    isLoading: false
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MOVIES:
            return {
                ...state,
                movies: action.movies,
            };
        case types.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default moviesReducer;