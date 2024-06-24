import { useSelector } from "react-redux";

const CounterMessage = () => {

    const counter = useSelector(state => state.counter)

    return (
        <>
        <h6>Count is {counter}</h6>
        </>
    )
}

export default CounterMessage;