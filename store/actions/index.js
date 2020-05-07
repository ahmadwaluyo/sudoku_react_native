import axios from 'axios';

export const SET_BOARDS = 'SET_BOARDS';
export const SET_INITIALBOARDS = 'SET_INITIALBOARDS';
export const SET_LOADING = 'SET_LOADING';
export const SET_SOLVED = 'SET_SOLVE';
export const SET_VALIDATE = 'SET_VALIDATE';

export const setBoards = (data) => {
    return { type: SET_BOARDS, payload: data }
}

export const setInitialBoards = (data) => {
    return { type: SET_INITIALBOARDS, payload: data }
}

export const setLoading = (status) => {
    return { type: SET_LOADING, payload: status }
}

export const setSolved = (data) => {
    return { type: SET_SOLVED, payload: data }
}

export const setValidate = (data) => {
    return { type: SET_VALIDATE, payload: data }
}

export const fetchBoards = (mode) => {
    console.log('masuk fetch')
    return (dispatch) => {
        dispatch(setLoading(true))
        axios
            .get(`https://sugoku.herokuapp.com/board?difficulty=${mode}`)
            .then(({ data }) => {
                console.log('ini res', data.board)
                dispatch(setBoards([...data.board]))
                dispatch(setInitialBoards(data.board))
            })
            .catch(err => {
                console.log(err)
            })
            .finally(_ => {
                dispatch(setLoading(false))
            })
    }
}

export const solveBoards = (data) => {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => 
    Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');
    return (dispatch) => {
        axios
        .post('https://sugoku.herokuapp.com/solve', encodeParams({ board: data }), {
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .then(response => {
            dispatch(setBoards(response.data.solution))
        })
        .catch(console.warn)
    }
}

export const validateBoards = (data) => {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => 
    Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');
    return (dispatch) => {
        axios
        .post('https://sugoku.herokuapp.com/validate', encodeParams({ board: data }), {
            'Content-Type': 'application/x-www-form-urlencoded'
        })
        .then(response => {
            console.log('ini data validate',response.data)
            dispatch(setValidate(response.data.status))
        })
        .catch(console.warn)
    }
}