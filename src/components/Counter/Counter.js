import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count => count + 1);
        }, 1000)

        return () => { // componentWillUnmount
            clearInterval(intervalId);
        }
    }, []) // пустий масив залежностей - componentDidMount

    return (
        <h1>
            {count}
        </h1>
    );
}


export default Counter;