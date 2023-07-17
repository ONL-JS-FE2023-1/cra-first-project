import React from 'react';

class Aloha extends React.Component {
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
        const { isGreeting } = this.state;
        const greetingText = isGreeting ? 'Hello' : 'Bye'; // isGreeting === true
        return <h1 onClick={() => { this.clickHandler() }}>{greetingText} {this.props.name} {this.props.lastName}</h1>
    }
}

export default Aloha;