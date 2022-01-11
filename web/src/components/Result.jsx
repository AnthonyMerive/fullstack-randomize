import React from 'react'
import { useSelector } from 'react-redux'

export const Result = () => {
    const result = useSelector(store => store.random.result.randomList);
    return (
        <div className='mt-4'>
            <h3 className='mt-2'>Resultado:</h3>
            <p>{result}</p>
        </div>
    )
}
