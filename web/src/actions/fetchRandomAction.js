import { types } from "../types/types";

const URL = 'https://randomizeapi.herokuapp.com/random'

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: types.viewLoading });

    return fetch(URL, {
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

    return fetch(URL)
        .then(response => response.json())
        .then(json => {
            
            dispatch({ type: types.randomList, list: json });
            dispatch({ type: types.viewLoaded });
        })
}