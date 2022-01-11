import React from 'react'
import { useSelector } from 'react-redux'

export const Result = () => {
    const result = useSelector(store => store.random.result.randomList);
    return (
        <div>
            <h3>Resultado:</h3>
            <p>{result}</p>
        </div>
    )
}
