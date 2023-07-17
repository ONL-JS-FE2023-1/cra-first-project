import React from 'react';

class Greeting extends React.Component {
    // Якщо вам потрібен стейт - ви зобов'язані створити конструктор, в якому створюєте стейт
    constructor(props) {
        super(props);

        this.state = {
            isGreeting: true
        }
    }

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const {isGreeting} = this.state;
        const greetingText = isGreeting ? 'Hello' : 'Bye'; // isGreeting === true
        return <h1 onClick={() => {this.clickHandler()}}>{greetingText} {this.props.name}</h1>
    }
}

export default Greeting;

/*

Доробити компоненту таким чином, що за натиснення на елемент текст "Hello" змінювався на "Bye"
Підказка. Тут треба працювати за стейтом


*/