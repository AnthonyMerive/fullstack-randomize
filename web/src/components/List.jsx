import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRandomList } from '../actions/fetchRandomAction';

export const List = () => {
    const dispatch = useDispatch();
    const list = useSelector(store => store.random.list)

    useEffect(() => {
        dispatch(fetchAllRandomList())
    }, [dispatch])

    return (
        <div className='mt-5'>
            <h3 className='mt-2'>Historial:</h3>
            <div className='d-flex justify-content-center my-5'>
                <ul className="list-group list-group-flush w-50">
                    {
                    list?.map(item =>
                        < li key={item.id} className="list-group-item">{item.randomList}</li>
                    )}
                </ul>
            </div>
        </div >
    )
}
