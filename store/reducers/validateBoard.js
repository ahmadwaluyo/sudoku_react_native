import { SET_VALIDATE } from '../actions';

const initialStore = {
    validator: ''
}

export default function validateBoard (state=initialStore, action) {
    const { type, payload } = action;

    if (type === SET_VALIDATE) {
        return { ...state, validator: payload }
    }

    return state;
}