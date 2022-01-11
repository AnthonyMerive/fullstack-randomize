import { types } from "../types/types";

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: types.viewLoading });

    return fetch(`http://localhost:8080/random`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ list: state })
    }).then(response => response.json())
        .then(json => {

            dispatch({ type: types.randomResult, data: json });
            dispatch(fetchAllRandomList())
            dispatch({ type: types.viewLoaded });
        })
}

export const fetchAllRandomList = () => (dispatch) => {

    dispatch({ type: types.viewLoading });

    return fetch(`http://localhost:8080/random`)
        .then(response => response.json())
        .then(json => {
            
            dispatch({ type: types.randomList, list: json });
            dispatch({ type: types.viewLoaded });
        })
}