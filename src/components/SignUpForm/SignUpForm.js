import React, { Component } from 'react';
import * as yup from 'yup';

const SCHEMA = yup.object({
    firstName: yup.string().min(1).max(30),
    lastName: yup.string().min(1).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
})

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
            ...initialState
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
        console.log(SCHEMA.isValidSync(this.state))
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        return (
            // 2. підставляємо у value інпутиків те, що знаходиться у стейті
            <form onSubmit={this.submitHandler}>
                <input type="text" name="firstName" placeholder='firstName' value={firstName} onChange={this.changeHandler} />
                <input type="text" name="lastName" placeholder='lastName' value={lastName} onChange={this.changeHandler} />
                <input type="text" name="email" placeholder='email' value={email} onChange={this.changeHandler} />
                <input type="text" name="password" placeholder='password' value={password} onChange={this.changeHandler} />
                <button type='submit'>Send form</button>
            </form>
        );
    }
}

export default SignUpForm;
