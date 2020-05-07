import { SET_BOARDS } from '../actions';
import { SET_INITIALBOARDS } from '../actions';

const initialStore = {
    boards: [],
    initialBoards: []
}

export default function boards (state=initialStore, action) {
    console.log('masuk reducer')
    const { type, payload } = action;

    if (type === SET_BOARDS) {
        return { ...state, boards: payload }
    }

    if (type === SET_INITIALBOARDS) {
        return { ...state, initialBoards: payload }
    }

    return state;
}