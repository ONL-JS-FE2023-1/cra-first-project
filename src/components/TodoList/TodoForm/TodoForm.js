import React, { Component } from 'react';
// import './style.css';
import styles from './TodoFormStyle.module.css';
console.log(styles);

class TodoForm extends Component {
    constructor(props) {
        super(props);
        // 2. Зробити стейт

        this.state = {
            todo: ''
        }
    }
    
    // 3. onChange
    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
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
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                {/* 1. Зробити інпут */}
                <input type='text' value={todo} name='todo' onChange={this.changeHandler} />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default TodoForm;
