import React, { useEffect, useState } from "react";

const lifeCycleMethods = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Compound Mounted");

        return () => {
            console.log("Compound will unmount");
        };
    }, []);

    useEffect(() => {
        if (count > 0) {
            console.log(`Count updated ${count}`);
        }
    }, [count]);

    return (
        <>
            <h3>Life Cycle Methods</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Count Btn</button>
        </>
    );
};

export default lifeCycleMethods;
