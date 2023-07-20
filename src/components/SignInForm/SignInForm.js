import React from 'react'
import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // тут можуть бути валідації перед запитом на сервер
        console.log(this.state); // тут може бути запит на сервер
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    render() {
        
        const {email, password} = this.state;

        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}>
                <label>
                    Your email: 
                    <input type='email' name='email' onChange={this.changeEmailHandler} value={email} />
                </label>
    
                <label>
                    Your password:
                    <input type='password' name='password' onChange={this.changePasswordHandler} value={password} />
                </label>
    
                <button type='submit'>Send form</button>
                <button type='reset'>Reset</button>
            </form>
        )
    }
    
}

export default SignInForm;