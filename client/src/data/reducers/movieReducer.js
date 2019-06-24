
import * as types from '../actions/actionTypes';

let initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MOVIES:
            return {
                ...state,
                movies: action.movies,
            };
        default:
            return state;
    }
}

export default moviesReducer;