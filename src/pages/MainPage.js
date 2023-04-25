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

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter;
