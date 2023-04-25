// import { useDispatch, useSelector } from "react-redux"

// export default function MainPage() {

//     const dispatch = useDispatch()
//     const {k} = useSelector((state) => state)


//     const handleIncrement = () => {
//         dispatch({
//             type: 'INCREMENT'
//         })
//     }

//     const handleDecrement = () => {
//         dispatch({
//             type: 'DECREMENT'
//         })
//     }

//     return (
//         <div>
//             <button onClick={handleIncrement}>+</button>
//             <h1>{k}</h1>
//             <button onClick={handleDecrement}>-</button>
//         </div>
//     )
// }


// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Counter() {
    const { count } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return <>
        <div>
            <button onClick={handleDecrement}>-</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
        </div>
    </>
}

export default Counter;