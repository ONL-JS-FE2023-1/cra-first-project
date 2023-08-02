import React, {useState, useCallback} from 'react';

const Clicker = () => {
    const [click, setClick] = useState(0);

    // const clickHandler = () => {
    //     setClick(click + 1);
    // }

    const handler = useCallback(() => {
        setClick(click => click + 1);
    }, [])

    return (
        <div>
            <h1>{click}</h1>
            <button onClick={handler}>Click me!</button>
        </div>
    );
}

export default Clicker;
