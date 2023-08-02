import React, { useState, useEffect } from 'react';
import { format, addSeconds } from 'date-fns';

const Counter = () => {
    const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
    const [isRunning, setIsRunning] = useState(true);

    let intervalId = null;

    useEffect(() => {
        if(isRunning) {
            intervalId = setInterval(() => {
                setTime(time => addSeconds(time, 1));
            }, 1000)
        }

        return () => { // componentWillUnmount
            clearInterval(intervalId);
        }
    }, [isRunning]) // пустий масив залежностей - componentDidMount

    const switchRunning = () => {
        setIsRunning(!isRunning);
    }

    return (
        <>
            <h1>{format(time, 'HH:mm:ss')}</h1>
            <button onClick={switchRunning}>{isRunning ? 'Stop' : 'Start'}</button>
        </>
    );
}


export default Counter;