import React, { useState, useReducer } from 'react';


const initialState = {
    clickCount: 0
}

function reducer(state, action) {
    // reducer не має мутувати стейт, натомість вона повертає НОВИЙ об'єкт стану
    switch (action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                clickCount: state.clickCount + 1
            }
        }
        default: {
            return state;
        }
    }
}

const RegistrationForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clickHandler = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        })
    }

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');



    return (
        <>
            <h1>{state.clickCount}</h1>
            <button onClick={clickHandler}>Click me</button>
        </>
        // <form>
        //     <input type="text" name="firstName" placeholder='firstName' value={firstName}  />
        //     <input type="text" name="lastName" placeholder='lastName' value={lastName}  />
        //     <input type="text" name="email" placeholder='email' value={email}  />
        //     <input type="text" name="password" placeholder='password' value={password}  />
        //     <button type='submit'>Registration</button>
        // </form>
    );
}

export default RegistrationForm;


/*

const [state, dispatch] = useReducer(reducer, initialState)

reducer:

(state, action) => newState
state - стан useReducer (поточний стан вашої компоненти)
action - об'єкт, яка містить інформацію, яка дає змогу отримати новий стан
newState - змінений стан, що повертатиметься з редьюсера

oldState => action:increment -> counter+1 => newState
oldState => action:decrement -> counter-1 => newState

reducer - чиста функція:
1. не має побічних ефектів (запити на сервер, інтервали, таймаути, асинхронна робота...)
2. детермінова функція - при одних і тих самих параметрах повертає один і той самий результат


action = {
    type: 'increment',
    payload: ''
}
type - для визначення, яку саме дію потрібно здійснити
payload - для передавання додаткових даних для створення стану за такого типу екшену


dispatch - функція, яка призначена для надсилання action

*/
