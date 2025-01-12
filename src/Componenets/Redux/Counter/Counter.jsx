import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from "../CounterAction";

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    return (

        <>
            <div>
                <h5>Counter Application</h5>
                <button onClick={() => dispatch(Decrement())} className="decreament-btn">Decreament</button><span>{counter}</span><button onClick={() => dispatch(Increment())} className="increament-btn">Increament</button>
            </div>
        </>
    )
}

export default Counter;