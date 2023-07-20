import React from 'react'
import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isEmailValid: true
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // тут можуть бути валідації перед запитом на сервер
        const {email} = this.state;

        if(!email.includes('@')) { // === false
            this.setState({
                isEmailValid: false
            })
        }

        console.log(this.state); // тут може бути запит на сервер
    }

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
                    [name]: value
                })
    }
    
    render() {
        
        const {email, password, isEmailValid} = this.state;

        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}>
                <label>
                    Your email: 
                    <input className={isEmailValid ? '' : 'invalid'} type='text' name='email' onChange={this.universalChangeHandler} value={email} />
                </label>
    
                <label>
                    Your password:
                    <input type='password' name='password' onChange={this.universalChangeHandler} value={password} />
                </label>
    
                <button type='submit'>Send form</button>
                <button type='reset'>Reset</button>
            </form>
        )
    }
    
}

export default SignInForm;


/*

Варіант завдання номер 1:

Зробити формочку реєстрації за аналогією.
Спрбувати зробити там простенькі валідації (як ми робили, за аналогією на пару).
Зробити там 5-6 інпутиків.
Спробуйте використати різні типи інпутиків
(https://www.w3schools.com/html/html_form_input_types.asp)


Варіант завдання номер 2:

Написати компоненту з формою, що складається з одного інпута і кнопки відправки.
За натисненням на кнопку поряд з формою виникає напис, який вітає користувача тим ім'ям, яке було введено в інпут.

Реалізація може бути, наприклад, такою, але не обов'язково:
Батьківська компонента
В цій компоеннті ви вітаєте користувача
    Всередині батьківської компоненти - дочірня компонента з формою, всередині якої користувач вводить ім'я користувача, якого потрібно привітати

Задача (*):
Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається ім'я користувача у стейті.

Тобто, форма, у якій запитується ім'я користувача - дочірня.
Форма, у якій відображається вітання користувачу - батьківська.

Дитина повинна передати батьку name юзера, щоб він міг з ним привітатися

    */