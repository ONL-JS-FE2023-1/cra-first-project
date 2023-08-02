import React, {useState, useCallback, useMemo} from 'react';

const Clicker = () => {
    const [click, setClick] = useState(0);
    const [value, setValue] = useState('');

    // const clickHandler = () => {
    //     setClick(click + 1);
    // }

    const handler = useCallback(() => {
        setClick(click => click + 1);
    }, []);

    const changeHandler = ({target: {value}}) => {
        setValue(value)
    }

    const logComputedValue = () => {
        let sum = 0;
        for(let i = 0; i < 900000000; i++) {
            sum += i;
        }
        const result = value ** 200;
        return result;
    }

    const memoizedValue = useMemo(() => logComputedValue(), [value]);

    console.log(memoizedValue);

    return (
        <div>
            <h1>{click}</h1>
            <input type="number" value={value} onChange={changeHandler}></input>
            <button onClick={handler}>Click me!</button>
        </div>
    );
}

export default Clicker;


/*

Способи поділитися логікою та даними між компонентами:

1. Рендер-пропс
2. HOC
3. Користувацькі хуки

*/