import CONSTANTS from "../constants";
const {ACTIONS} = CONSTANTS;

export function reducer(state, action) {
    // reducer не має мутувати стейт, натомість вона повертає НОВИЙ об'єкт стану
    switch (action.type) {
        case ACTIONS.INPUT_CHANGE: {
            const {payload: {name, value}} = action;
            return {
                ...state,
                [name]: value
            }
        }
        default: {
            return state;
        }
    }
}

/*

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

*/