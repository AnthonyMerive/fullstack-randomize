import { types } from "../types/types";

export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: types.viewLoading });

    return fetch(`http://localhost:8080/random`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) 
    }).then(response => response.json())
      .then(json => {
          console.log(json)
          dispatch({ type: types.randomResult, data: json });
          dispatch({ type: types.viewLoaded });
        })
}