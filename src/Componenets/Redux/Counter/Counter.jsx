import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'
import { Increament, Decreament } from "../CounterAction";


const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)


    return (

        <>
            <div>
                <h5>Counter Application</h5>
                <button onClick={() => dispatch(Increament())} className="increament-btn">Increament</button><span>{counter}</span><button onClick={() => dispatch(Decreament())} className="decreament-btn">Decreament</button>
            </div>
        </>
    )
}

export default Counter;