import { SET_LOADING } from '../actions';

const initialStore = {
    isLoading: false
}

export default function loading (state = initialStore, action) {
    const { type, payload } = action;

    if (type === SET_LOADING) {
        return { ...state, isLoading: payload }
    }

    return state
}