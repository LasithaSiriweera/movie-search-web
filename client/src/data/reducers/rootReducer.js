import {combineReducers} from 'redux';
import moviesReducer from './movieReducer';

const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;