import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchRandom } from '../actions/fetchRandomAction';

export const Form = () => {

    const [state, setState] = useState(null);
    const dispatch = useDispatch();
 
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchRandom(state));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="list">Ingrese una lista separada por comas:</label>
                <br />
                <textarea className='mt-2' id="list" style={{ width: "300px", height: "120px" }}
                    onChange={(e) => setState(e.target.value)}
                ></textarea>
                <br />
                <button type="submit" className='btn btn-primary shadow-sm'>
                    Enviar
                </button>
            </form>
        </div>
    )
}
