import React from 'react';

class Greeting extends React.Component {
    // Якщо вам потрібен стейт - ви зобов'язані створити конструктор, в якому створюєте стейт
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}

export default Greeting;