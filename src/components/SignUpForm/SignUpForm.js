import React, { Component } from 'react';
import styles from './SignUpFormStyle.module.css';
import {SCHEMA} from '../../schemas/index'

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        // 1. Створюємо відповідне поле у стейті
        this.state = {
            ...initialState,
            error: null
        }
    }

    // 3. реалізуємо обробник зміни інпутика
    changeHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        // isValidSync -> boolean
        // validateSync -> object / error
        try {
            this.setState({
                error: null
            })

            SCHEMA.validateSync(this.state);
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        const { email, password, firstName, lastName, error } = this.state;
        return (
            // 2. підставляємо у value інпутиків те, що знаходиться у стейті
            <form onSubmit={this.submitHandler}>
                <input type="text" name="firstName" placeholder='firstName' value={firstName} onChange={this.changeHandler} />
                <input type="text" name="lastName" placeholder='lastName' value={lastName} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder='email' value={email} onChange={this.changeHandler} />
                <input type="text" name="password" placeholder='password' value={password} onChange={this.changeHandler} />
                <button type='submit'>Send form</button>
                {error && <p className={styles.error}>{error.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;
