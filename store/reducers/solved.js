import { SET_SOLVED } from '../actions';

const initialStore = {
    solved: []
}

export default solved = (state = initialStore, action) => {
    const { type, payload } = action;

    if (type === SET_SOLVED) {
        return { ...state, solved : payload }
    }

    return state;
}
