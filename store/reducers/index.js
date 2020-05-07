import { combineReducers } from 'redux';
import boards from './board';
import isLoading from './isLoading';
import solved from './solved';
import validator from './validateBoard';

export default combineReducers({
    boards,
    isLoading,
    solved,
    validator
})