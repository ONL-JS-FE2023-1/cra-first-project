import React, { Component } from 'react';
// import './style.css';
import styles from './TodoFormStyle.module.css';
import cx from 'classnames';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        // 2. Зробити стейт

        this.state = {
            todo: '',
            isInputValid: true
        }
    }
    
    // 3. onChange
    changeHandler = ({target: {value, name}}) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                [name]: value,
                isInputValid: true
            })
        }
        
    }

    submitHandler = (event) => {
        const {props: {sendData}} = this;
        event.preventDefault();
        sendData(this.state.todo);
        
        // після відправки форми ми підчищаємо інпутик
        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo, isInputValid} = this.state;
        // const className = styles.input + (isInputValid ? '' : ` ${styles['invalid-input']}`);
        const className = cx({
            [styles.input]: true,
            [styles['invalid-input']]: isInputValid === false // або !isInputValid
        })

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                {/* 1. Зробити інпут */}
                <input 
                type='text' 
                value={todo} 
                name='todo' 
                onChange={this.changeHandler} 
                className={className}
                />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

/*
Коли інпут валідний:
<input className="input">

Коли інпут не валідний
<input className="input invalid-input">

*/


// function cx(objectClassNames) {
//     const cort = Object.entries(objectClassNames);
//     const filteredArray = cort.filter(([className, condition]) => condition);
//     const MapArray = filteredArray.map(([className, condition]) => className);
//     return MapArray.join(' ');
// }
// 'className1 className2'

/*

objectClassNames = {
    className1: true
    className2: true
    className3: false
}

[[className1, true], [className2, true], [className3, false]] =>
[[className1, true], [className2, true]] =>
[className1, className2] =>
'className1 className2'

*/

export default TodoForm;
